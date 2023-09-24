import { type User, clerkClient } from '@clerk/nextjs/server';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from '~/server/api/trpc';
import { userExistsWithUsername } from '../../../helpers/user';

import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

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

export const postRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      take: 100,
      orderBy: [{ createdAt: 'desc' }],
    });

    const users = await clerkClient.users.getUserList({
      userId: posts.map((post) => post.authorId),
    });

    const clientUserData = users.map((user) => filterUserForClient(user));

    return posts.map((post) => {
      const author = clientUserData.find((user) => user.id === post.authorId);

      if (!userExistsWithUsername(author)) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: `Author for post (${post.id}) not found`,
        });
      }

      return {
        ...post,
        author,
      };
    });
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

function filterUserForClient(user: User) {
  return {
    id: user.id,
    username: user.username,
    imageUrl: user.imageUrl,
  };
}
