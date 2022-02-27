const jwt = require('jsonwebtoken');
const blogPostsService = require('../services/blogPostsService');

const createBlogPost = async (req, res) => {
  const token = req.headers.authorization;
  const { title, content, categoryIds } = req.body;
  const incognit = jwt.decode(token);
  const { id: userId } = incognit;
  console.log('USERID====>', userId);
  const { id } = await blogPostsService.createBlogPost({
    title, content, categoryIds,
  });
  const result = await { id, userId: 1, title, content };
  return res.status(201).json(result);
};

module.exports = {
  createBlogPost,
};
