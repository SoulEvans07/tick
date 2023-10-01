import { clerkClient } from '@clerk/nextjs/server';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from '~/server/api/trpc';
import { commentRatelimiter } from '~/server/api/ratelimit';
import { linkAuthorToData, addAuthorToItems } from '../mappers/author';

export const commentRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ authorId: z.string() }).optional())
    .query(async ({ ctx, input }) => {
      const comments = await ctx.db.comment
        .findMany({
          take: 100,
          orderBy: [{ createdAt: 'desc' }],
          ...(input && 'authorId' in input
            ? { where: { authorId: input.authorId } }
            : {}),
        })
        .then(addAuthorToItems);
      return comments;
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const comment = await ctx.db.comment.findUnique({
        where: { id: input.id },
      });
      if (!comment) throw new TRPCError({ code: 'NOT_FOUND' });

      const author = await clerkClient.users.getUser(comment.authorId);
      return linkAuthorToData(comment, author);
    }),

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
