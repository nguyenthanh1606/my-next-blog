import { useState, useEffect } from "react";
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from "../services/postService";
import { IPostProps } from "../types/postTypes";

export const usePosts = () => {
  const [posts, setPosts] = useState<IPostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return { posts, loading };
};

export const usePost = (id: string) => {
  const [post, setPost] = useState<IPostProps | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostById(id);
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  return { post, loading };
};
