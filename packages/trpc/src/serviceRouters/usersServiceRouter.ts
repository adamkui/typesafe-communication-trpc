import { UserSchema } from "../schemas";
import { t } from "../trpc";

export const usersServiceRouter = t.router({
  getUserById: t.procedure
    .input(UserSchema.pick({ id: true }))
    .query(({ input, ctx }) => {
      return ctx.usersService.getUserById(input.id);
    }),
  createUser: t.procedure.input(UserSchema).mutation(({ input, ctx }) => {
    return ctx.usersService.createUser(input);
  }),
  updateUser: t.procedure
    .input(UserSchema.partial())
    .mutation(({ input, ctx }) => {
      return ctx.usersService.updateUser(input);
    }),
  deleteUser: t.procedure
    .input(UserSchema.pick({ id: true }))
    .mutation(({ input, ctx }) => {
      return ctx.usersService.deleteUser(input.id);
    }),
});
