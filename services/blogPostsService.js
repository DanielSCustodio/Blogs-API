const { BlogPost } = require('../models');

const createBlogPost = async ({ title, content, categoryIds, userId = 1 }) => {
  const newBlogPost = await BlogPost.create({ 
    title,
    content,
    userId,
    categoryIds,
    published: new Date(),
    updated: new Date(),
  });

  return newBlogPost;
};

module.exports = {
  createBlogPost,
};