const jwt = require('jsonwebtoken');
const { blogPostSchema, blogPostSchemaTwo } = require('../../util/validationSchemaBlogPosts');
const sendResponse = require('./responseError');
const { Category, BlogPost, User } = require('../../models');

const CATEGORY_NOT_FOUND = '"categoryIds" not found';
const ID_NOT_EXIST = 'Post does not exist';
const UNAUTHORIZED_USER = 'Unauthorized user';

const checkBody = async (req, res, next) => {
  try {
    await blogPostSchema.validateAsync(req.body);
  } catch (error) {
    const err = (error.details[0]);
    const { status, message } = await sendResponse(err.message);
    return res.status(status).json({ message });
  }
  next();
};

const checkBodyTwo = async (req, res, next) => {
  try {
    await blogPostSchemaTwo.validateAsync(req.body);
  } catch (error) {
    const err = (error.details[0]);
    const {
      status,
      message,
    } = await sendResponse(err.message);
    return res.status(status).json({
      message,
    });
  }
  next();
};

const checkIdcategory = async (req, res, next) => {
  const { categoryIds } = await req.body;

  const checkId = await Promise.all(
    categoryIds.map(async (id) => {
      const result = await Category.findByPk(id);
      return result;
    }),
  );

  const checkCategory = checkId.some((id) => id === null);
  
  if (checkCategory) {
    const { status, message } = await sendResponse(CATEGORY_NOT_FOUND);
    return res.status(status).json({ message });
  }
  
  next();
};

const checkIdBlogPost = async (req, res, next) => {
  const { id } = req.params;
  const result = await BlogPost.findByPk(id);
  if (!result) {
    const { status, message } = await sendResponse(ID_NOT_EXIST);
    return res.status(status).json({ message });
  }
  next();
};

const userAuthorization = async (req, res, next) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const { userId } = await BlogPost.findByPk(id);
  const decode = jwt.decode(token);
  const { email } = decode; 
  const { id: idDecode } = await User.findOne({ where: { email } });
  if (idDecode !== userId) {
    const { status, message } = await sendResponse(UNAUTHORIZED_USER);
    return res.status(status).json({ message });
  }
  next();
};

module.exports = {
  checkBody,
  checkIdcategory,
  checkIdBlogPost,
  userAuthorization,
  checkBodyTwo,
};