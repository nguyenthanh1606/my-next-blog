export default async function Home() {
  const data = await fetch(`${process.env.API_URL}/posts`);
  const posts = await data.json().then((res) => res.data);

  return (
    <div>
      <h1>My Blog</h1>
      {posts?.map((post: any) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}
