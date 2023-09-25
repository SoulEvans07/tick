import { clerkClient } from '@clerk/nextjs';
import { TRPCError } from '@trpc/server';
import { z } from 'zod';
import { filterUserForClient, userExistsWithUsername } from '~/helpers/user';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const profileRouter = createTRPCRouter({
  getByUsername: publicProcedure
    .input(z.object({ username: z.string() }))
    .query(async ({ input }) => {
      const [user] = await clerkClient.users.getUserList({
        username: [input.username],
      });

      if (!userExistsWithUsername(user)) {
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'User not found',
        });
      }

      return filterUserForClient(user);
    }),

  list: publicProcedure.query(async () => {
    try {
      const users = await clerkClient.users.getUserList({
        limit: 10,
      });
      return users.map((user) => {
        if (!userExistsWithUsername(user)) {
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'User not found',
          });
        }

        return filterUserForClient(user);
      });
    } catch (e) {
      throw new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'User fetching failed',
        cause: e,
      });
    }
  }),
});
