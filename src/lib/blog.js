import * as mod from "@/components/blog/posts";

export const getAllPosts = () =>
  Object.values(mod).sort((a, b) => new Date(b.date) - new Date(a.date));
export const getPost = (slug) => getAllPosts().find((p) => p.id === slug);
export const getRelated = (post, limit = 3) =>
  getAllPosts().filter((p) => p.id !== post.id && p.category === post.category).slice(0, limit).map(summary);
export const summary = ({ content, ...rest }) => rest;
