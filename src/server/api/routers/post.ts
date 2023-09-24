import { type User, clerkClient } from '@clerk/nextjs/server';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from '~/server/api/trpc';
import { userExistsWithUsername } from '../../../helpers/user';

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
    .input(
      z.object({
        content: z.string().min(1).max(255),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.currentUserId;

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
