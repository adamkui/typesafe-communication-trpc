import { trpc } from "./utils/trpc";

function App() {
  const user = trpc.user.getUser.useQuery();
  const hello = trpc.user.greetUser.useQuery({ name: user.data?.name ?? "" });
  const mutation = trpc.message.saveMessage.useMutation();

  const sendMessage = () => {
    mutation.mutate({ message: "Ez egy próba" });
  };

  if (hello.isLoading) return <p>Betöltés...</p>;

  if (mutation.isSuccess) {
    console.log(mutation.data.message);
  }

  return (
    <>
      <h1>{hello.data?.message}</h1>
      <button onClick={sendMessage}>Üzenet küldése</button>
    </>
  );
}

export default App;
