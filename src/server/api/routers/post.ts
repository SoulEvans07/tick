import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.db.post.findMany();
  }),
});
