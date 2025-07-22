import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

// GET = trpc query
// POST / PUT / DELETE = trpc mutation

const userRouter = t.router({
  getUser: t.procedure.query(() => ({ id: 1, name: "Teszt Elek" })),
  greetUser: t.procedure
    .input(z.object({ name: z.string() }))
    .query(({ input }) => {
      return { message: `Hello, ${input.name}!` };
    }),
});

const messageRouter = t.router({
  saveMessage: t.procedure
    .input(z.object({ message: z.string() }))
    .mutation(({ input }) => {
      const message = `Üzenet elküldve: ${input.message}`;
      console.log(message);
      return { message };
    }),
});

export const appRouter = t.router({
  user: userRouter,
  message: messageRouter,
});

export type AppRouter = typeof appRouter;
