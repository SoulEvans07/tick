import { TRPCError } from '@trpc/server';
import { z } from 'zod';

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from '~/server/api/trpc';
import { customEmojiRatelimiter } from '~/server/api/ratelimit';
import { uploadthing } from '~/server/storage/uploadthing';

export const commentRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const files = await uploadthing.listFiles();
    return files;
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

      const { success } = await customEmojiRatelimiter.limit(authorId);
      if (!success) {
        throw new TRPCError({
          code: 'TOO_MANY_REQUESTS',
          message: 'Too many new emoji',
        });
      }
    }),
});
