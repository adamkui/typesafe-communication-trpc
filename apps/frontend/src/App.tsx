import { trpc } from "./trpc";

function App() {
  const userQuery = trpc.user.getUserById.useQuery({ id: "12345" });
  const createPostMutation = trpc.post.createPost.useMutation();

  const createPost = () => {
    createPostMutation.mutate({
      author: "Teszt Elek",
      content: "Lorem ipsum",
      id: "12345",
      title: "Teszt bejegyzés",
    });
  };

  if (userQuery.isLoading) return <p>{"Betöltés..."}</p>;

  if (createPostMutation.isSuccess) {
    alert(createPostMutation.data.message);
  }

  return (
    <>
      <h1>{`Hello, ${userQuery.data?.name}!`}</h1>
      <button onClick={createPost}>{`Bejegyzés létrehozása`}</button>
    </>
  );
}

export default App;
