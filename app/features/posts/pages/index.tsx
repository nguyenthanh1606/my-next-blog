import { usePosts } from "../hooks/usePosts";
import Link from "next/link";
import { IPostProps } from "../types/postTypes";

const PostListPage: React.FC = () => {
  const { posts, loading } = usePosts();

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <Link href="/posts/create">Tạo bài viết mới</Link>
      {posts.map((post: IPostProps) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <Link href={`/posts/${post.id}`}>Xem chi tiết</Link>
        </div>
      ))}
    </div>
  );
};

export default PostListPage;
