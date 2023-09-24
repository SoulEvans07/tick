import { type User, clerkClient } from '@clerk/nextjs/server';
import { TRPCError } from '@trpc/server';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { userExistsWithUsername } from '../../../helpers/user';

export const postRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.db.post.findMany({
      take: 100,
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
});

function filterUserForClient(user: User) {
  return {
    id: user.id,
    username: user.username,
    imageUrl: user.imageUrl,
  };
}
