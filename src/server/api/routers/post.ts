import { type User, clerkClient } from "@clerk/nextjs/server";
import { TRPCError } from "@trpc/server";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

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

      if (!author) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
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
  if (!user.username) {
    throw new TRPCError({
      code: "INTERNAL_SERVER_ERROR",
      message: `No username for user (${user.id})`,
    });
  }

  return {
    id: user.id,
    username: user.username,
    imageUrl: user.imageUrl,
  };
}
