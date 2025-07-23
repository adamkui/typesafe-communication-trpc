import { PostSchema } from "../schemas";
import { t } from "../trpc";

export const postsServiceRouter = t.router({
  getPostById: t.procedure
    .input(PostSchema.pick({ id: true }))
    .query(({ input, ctx }) => {
      return ctx.postsService.getPostById(input.id);
    }),
  createPost: t.procedure.input(PostSchema).mutation(({ input, ctx }) => {
    return ctx.postsService.createPost(input);
  }),
  updatePost: t.procedure
    .input(PostSchema.partial())
    .mutation(({ input, ctx }) => {
      return ctx.postsService.updatePost(input);
    }),
  deletePost: t.procedure
    .input(PostSchema.pick({ id: true }))
    .mutation(({ input, ctx }) => {
      return ctx.postsService.deletePost(input.id);
    }),
});
