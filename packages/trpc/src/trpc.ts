import { initTRPC } from "@trpc/server";

import { AppContext } from "./schemas";

export const t = initTRPC.context<AppContext>().create();
