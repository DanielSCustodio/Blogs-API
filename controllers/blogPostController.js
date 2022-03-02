/* const jwt = require('jsonwebtoken'); */
const blogPostsService = require('../services/blogPostsService');

const createBlogPost = async (req, res) => {
  const token = req.headers.authorization;
  const { title, content, categoryIds } = req.body;
  const blogPost = await blogPostsService.createBlogPost(title, content, token, categoryIds);
  const result = { id: blogPost.id, userId: blogPost.userId, title, content };
  res.status(201).json(result);
};

const getAllBlogPosts = async (req, res) => {
  const allBlogPosts = await blogPostsService.getAllBlogPosts();
  return res.status(200).json(allBlogPosts);
};

const getBlogPostsId = async (req, res) => {
  const { id } = req.params;
  const blogPost = await blogPostsService.getBlogPostsId(id);
  res.status(200).json(blogPost);
};

const editBlogPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const blogPost = await blogPostsService.editBlogPost(id, title, content);
  res.status(200).json(blogPost);
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostsId,
  editBlogPost,
};
