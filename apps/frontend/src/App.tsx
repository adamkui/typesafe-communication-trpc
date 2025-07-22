import { trpc } from "./utils/trpc";

function App() {
  const hello = trpc.hello.useQuery({ name: "Világ" });

  if (hello.isLoading) return <p>Betöltés...</p>;

  return <h1>{hello.data?.message}</h1>;
}

export default App;
