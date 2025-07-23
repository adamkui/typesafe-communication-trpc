import { postsServiceRouter } from "./serviceRouters/postsServiceRouter";
import { usersServiceRouter } from "./serviceRouters/usersServiceRouter";
import { t } from "./trpc";

export const appRouter = t.router({
  user: usersServiceRouter,
  post: postsServiceRouter,
});

export type AppRouter = typeof appRouter;
