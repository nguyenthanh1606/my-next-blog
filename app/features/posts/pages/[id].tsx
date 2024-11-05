import { useRouter } from "next/router";
import { usePost } from "../hooks/usePosts";
import Link from "next/link";

const PostDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const { post, loading } = usePost(id as string);

  if (loading) return <div>Loading...</div>;
  if (!post) return <div>Không tìm thấy bài viết</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link href={`/posts/edit/${id}`}>Chỉnh sửa</Link>
    </div>
  );
};

export default PostDetailPage;
