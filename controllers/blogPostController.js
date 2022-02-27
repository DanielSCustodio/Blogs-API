const jwt = require('jsonwebtoken');
const blogPostsService = require('../services/blogPostsService');

const createBlogPost = async (req, res) => {
  const token = req.headers.authorization;
  const { title, content, categoryIds } = req.body;
  const decode = jwt.decode(token);
  const { id: userId = 1 } = decode; 
  const { id } = await blogPostsService.createBlogPost({
    title, content, categoryIds,
  });
  
  return res.status(201).json({ id, userId, title, content });
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

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostsId,
};
