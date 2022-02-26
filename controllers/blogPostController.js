const jwt = require('jsonwebtoken');
const blogPostsService = require('../services/blogPostsService');

const createBlogPost = async (req, res) => {
  console.log('CREATE BLOG====> PASSOU AQUI');
  const token = req.headers.authorization;
  const { title, content, categoryIds } = req.body;
  const incognit = jwt.decode(token);
  const { id: userId } = incognit;
  const { id } = await blogPostsService.createBlogPost({
    userId, title, content, categoryIds,
  });
  const result = await { id, userId, title, content };
  return res.status(201).json(result);
};

module.exports = {
  createBlogPost,
};
