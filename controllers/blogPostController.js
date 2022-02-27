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

module.exports = {
  createBlogPost,
  getAllBlogPosts,
};
