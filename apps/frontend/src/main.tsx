import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@trpc/index";
import ReactDOM from "react-dom/client";

import App from "./App";
import { trpc } from "./utils/trpc";

const client = new QueryClient();

const trpcClient = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc",
    }),
  ],
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <trpc.Provider client={trpcClient} queryClient={client}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </trpc.Provider>
);
