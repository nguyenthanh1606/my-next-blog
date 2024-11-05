import React from "react";
import { IPostProps } from "../types/postTypes";

interface PostCardProps {
  post: IPostProps;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => (
  <div>
    <h2>{post.title}</h2>
    <p>{post.description}</p>
    <p>{post.active ? "Đang hoạt động" : "Không hoạt động"}</p>
  </div>
);

export default PostCard;
