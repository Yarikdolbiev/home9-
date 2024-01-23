import useFetch from "../hooks/UseFetch";

const MyComponent = () => {
  const { data: posts, loading, error } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {!!posts && posts?.map(post => <li key={post.id}>{post.title}</li>)}
      </ul>
    </div>
  );
};

export default MyComponent;
