import { appRouter } from "@trpc/index";
import { AppContext } from "@trpc/schemas";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";

import { postsService } from "./services/posts.service";
import { usersService } from "./services/users.service";

export const createAppContext = (): AppContext => {
  return {
    usersService,
    postsService,
  };
};

const app = express();

app.use(cors());

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: () => createAppContext(),
  })
);

app.listen(4000, () => {
  console.log("🚀 Backend running at http://localhost:4000");
});
