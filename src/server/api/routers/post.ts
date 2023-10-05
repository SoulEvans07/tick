import { clerkClient } from '@clerk/nextjs/server';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from '~/server/api/trpc';
import { postRatelimiter } from '~/server/api/ratelimit';
import { linkAuthorToData, addAuthorToItems } from '../mappers/author';

export const postRouter = createTRPCRouter({
  list: publicProcedure
    .input(z.object({ authorId: z.string().optional() }).optional())
    .query(async ({ ctx, input }) => {
      const posts = await ctx.db.post
        .findMany({
          take: 100,
          orderBy: [{ createdAt: 'desc' }],
          include: {
            _count: { select: { comments: true } },
          },
          ...(!!input?.authorId ? { where: { authorId: input.authorId } } : {}),
        })
        .then(addAuthorToItems);
      return posts;
    }),

  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const post = await ctx.db.post.findUnique({
        where: { id: input.id },
        include: {
          _count: { select: { comments: true } },
          comments: {
            take: 100,
            orderBy: [{ createdAt: 'asc' }],
          },
        },
      });
      if (!post) throw new TRPCError({ code: 'NOT_FOUND' });

      const author = await clerkClient.users.getUser(post.authorId);
      return linkAuthorToData(
        { ...post, comments: await addAuthorToItems(post.comments) },
        author
      );
    }),

  create: privateProcedure
    .input(z.object({ content: z.string().min(1).max(255) }))
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.currentUserId;

      const { success } = await postRatelimiter.limit(authorId);
      if (!success) {
        throw new TRPCError({
          code: 'TOO_MANY_REQUESTS',
          message: 'Too many posts',
        });
      }

      const post = await ctx.db.post.create({
        data: {
          authorId,
          content: input.content,
        },
      });

      return post;
    }),
});
