import { clerkClient } from '@clerk/nextjs/server';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from '~/server/api/trpc';
import { Emoji } from '~/helpers/emoji';
import { commentRatelimiter, reactRatelimiter } from '~/server/api/ratelimit';
import { linkAuthorToData, addAuthorToItems } from '../mappers/author';

export const commentRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const comments = await ctx.db.comment
      .findMany({
        take: 100,
        orderBy: [{ createdAt: 'desc' }],
      })
      .then(addAuthorToItems);
    return comments;
  }),

  listByAuthor: publicProcedure
    .input(z.object({ authorId: z.string() }))
    .query(async ({ ctx, input }) => {
      const comments = await ctx.db.comment
        .findMany({
          include: { reactions: true },
          take: 100,
          orderBy: [{ createdAt: 'desc' }],
          where: { authorId: input.authorId },
          include: {
            post: {
              include: {
                _count: { select: { comments: true } },
              },
            },
          },
        })
        .then(addAuthorToItems);

      // P0: optimize this
      const postUsers = await clerkClient.users.getUserList({
        userId: comments.map((comment) => comment.post.authorId),
      });

      return comments.map((comment) => {
        const author = postUsers.find(
          (user) => user.id === comment.post.authorId,
        );
        return {
          ...comment,
          post: linkAuthorToData(comment.post, author),
        };
      });
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const comment = await ctx.db.comment.findUnique({
        where: { id: input.id },
        include: { reactions: true },
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

  react: privateProcedure
    .input(z.object({ commentId: z.string().cuid(), react: Emoji }))
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.currentUserId;

      const { success } = await reactRatelimiter.limit(authorId);
      if (!success) {
        throw new TRPCError({
          code: 'TOO_MANY_REQUESTS',
          message: 'Too many reacts',
        });
      }

      const comment = await ctx.db.comment.findUnique({
        where: { id: input.commentId },
      });
      if (!comment) throw new TRPCError({ code: 'NOT_FOUND' });

      const react = await ctx.db.commentReaction.create({
        data: {
          authorId,
          commentId: input.commentId,
          emoji: input.react,
        },
      });

      return react;
    }),
});
