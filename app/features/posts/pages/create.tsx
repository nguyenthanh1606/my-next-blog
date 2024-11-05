import { createPost } from "../services/postService";
import PostForm from "../components/PostForm";
import { useRouter } from "next/router";

const CreatePostPage: React.FC = () => {
  const router = useRouter();

  const handleCreatePost = async (data: { title: string; content: string }) => {
    await createPost(data);
    router.push("/posts");
  };

  return (
    <div>
      <h1>Tạo bài viết mới</h1>
      <PostForm onSubmit={handleCreatePost} />
    </div>
  );
};

export default CreatePostPage;
