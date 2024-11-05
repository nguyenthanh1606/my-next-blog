import { useState } from "react";

interface PostFormProps {
  initialData?: { title: string; content: string };
  onSubmit: (data: { title: string; content: string }) => void;
}

const PostForm: React.FC<PostFormProps> = ({
  initialData = { title: "", content: "" },
  onSubmit,
}) => {
  const [title, setTitle] = useState(initialData.title);
  const [content, setContent] = useState(initialData.content);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tiêu đề"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Nội dung"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Lưu</button>
    </form>
  );
};

export default PostForm;
