import axios from "axios";

const BASE_URL = `${process.env.API_URL}/posts`;

export const getPosts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data.data;
};

export const getPostById = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data.data;
};

export const createPost = async (data: { title: string; content: string }) => {
  await axios.post(BASE_URL, { data });
};

export const updatePost = async (
  id: string,
  data: { title: string; content: string }
) => {
  await axios.put(`${BASE_URL}/${id}`, { data });
};

export const deletePost = async (id: string) => {
  await axios.delete(`${BASE_URL}/${id}`);
};
