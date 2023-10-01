import { clerkClient } from '@clerk/nextjs/server';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from '~/server/api/trpc';
import { commentRatelimiter } from '~/server/api/ratelimit';

export const commentRouter = createTRPCRouter({
  create: privateProcedure
    .input(
      z.object({
        postId: z.string().cuid(),
        content: z.string().min(1).max(255),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.currentUserId;

      const { success } = await commentRatelimiter.limit(authorId);
      if (!success) {
        throw new TRPCError({
          code: 'TOO_MANY_REQUESTS',
          message: 'Too many comments',
        });
      }

      const post = await ctx.db.post.findUnique({
        where: { id: input.postId },
      });
      if (!post) throw new TRPCError({ code: 'NOT_FOUND' });

      const comment = await ctx.db.comment.create({
        data: {
          authorId,
          postId: input.postId,
          content: input.content,
        },
      });

      return comment;
    }),
});
