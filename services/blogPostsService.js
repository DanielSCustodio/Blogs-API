const { BlogPost } = require('../models');

const createBlogPost = async ({ title, content, categoryIds }) => {
  const newBlogPost = await BlogPost.create({ 
    title,
    content,
    categoryIds,
    published: new Date(),
    updated: new Date(),
  });

  return newBlogPost;
};

module.exports = {
  createBlogPost,
};