// consulta: https://sequelize.org/v7/manual/advanced-many-to-many.html
const { BlogPost, User, Category } = require('../models');

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

const getAllBlogPosts = async () => {
  const allBlogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, // variavel para ocultar senha não funfa
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return allBlogPosts;
};

const getBlogPostsId = async (id) => {
  const blogPost = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, // variavel para ocultar senha não funfa
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return blogPost;
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostsId,
};