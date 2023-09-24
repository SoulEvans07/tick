import { type User, clerkClient } from '@clerk/nextjs/server';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from '~/server/api/trpc';
import {
  filterUserForClient,
  userExistsWithUsername,
} from '../../../helpers/user';
import { Post } from '@prisma/client';

// Create a new ratelimiter, that allows 3 requests per 1 minute
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '1 m'),
  analytics: true,
  /**
   * Optional prefix for the keys used in redis. This is useful if you want to share a redis
   * instance with other applications and want to avoid key collisions. The default prefix is
   * "@upstash/ratelimit"
   */
  prefix: '@upstash/ratelimit',
});

async function getUsers(userIds?: string[]) {
  return clerkClient.users.getUserList({ userId: userIds });
}

function linkUserDataToPost(post: Post, author: User | undefined) {
  if (!userExistsWithUsername(author)) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: `Author by id (${post.authorId}) for post (${post.id}) not found`,
    });
  }

  return {
    ...post,
    author: filterUserForClient(author),
  };
}

async function addUserDataToPosts(posts: Post[]) {
  const users = await clerkClient.users.getUserList({
    userId: posts.map((post) => post.authorId),
  });

  return posts.map((post) => {
    const author = users.find((user) => user.id === post.authorId);
    return linkUserDataToPost(post, author);
  });
}

export const postRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ userId: z.string().optional() }).optional())
    .query(async ({ ctx, input }) => {
      const posts = await ctx.db.post
        .findMany({
          take: 100,
          orderBy: [{ createdAt: 'desc' }],
          ...(!!input?.userId ? { where: { authorId: input.userId } } : {}),
        })
        .then(addUserDataToPosts);
      return posts;
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({ where: { id: input.id } });
      if (!post) throw new TRPCError({ code: 'NOT_FOUND' });

      const author = await clerkClient.users.getUser(post.authorId);
      return linkUserDataToPost(post, author);
    }),

  create: privateProcedure
    .input(z.object({ content: z.string().min(1).max(255) }))
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.currentUserId;

      const { success } = await ratelimit.limit(authorId);
      if (!success) throw new TRPCError({ code: 'TOO_MANY_REQUESTS' });

      const post = await ctx.db.post.create({
        data: {
          authorId,
          content: input.content,
        },
      });

      return post;
    }),
});
