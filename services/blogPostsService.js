// consulta: https://sequelize.org/v7/manual/advanced-many-to-many.html
// consulta: https://stackoverflow.com/questions/31258158/how-to-implement-search-feature-using-sequelizejs
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');
const { BlogPost, User, Category } = require('../models');

const createBlogPost = async (title, content, token, categoryIds) => {
  const decode = jwt.decode(token);
  const { email, id: userId } = decode; 
  const getUserId = await User.findOne({ where: { email } });
  const newBlogPost = await BlogPost.create({ 
    title,
    content,
    userId,
    categoryIds,
    published: new Date(),
    updated: new Date(),
  });
  return { id: newBlogPost.id, title, content, userId: getUserId.id, categoryIds };
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

const editBlogPost = async (id, title, content) => {
  await BlogPost.update({ title, content, updated: new Date() }, { where: { id } });
  const blogPostEdited = await getBlogPostsId(id);
  return blogPostEdited;
};

const deleteBlogPost = async (id) => {
  await BlogPost.destroy({ where: { id } });
};

const searchBlogPost = async (queryParam) => {
  const blogPostSearch = await BlogPost.findAll(
    {
      where: {
        [Op.or]: [
          { title: { [Op.like]: `%${queryParam}%` } },
          { content: { [Op.like]: `%${queryParam}%` } },
        ],
      },
      include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
    },
  );

  return blogPostSearch;
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostsId,
  editBlogPost,
  deleteBlogPost,
  searchBlogPost,
};