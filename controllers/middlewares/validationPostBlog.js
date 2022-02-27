const { blogPostSchema } = require('../../util/validationSchemaBlogPosts');
const sendResponse = require('./responseError');
const { Category } = require('../../models');

const CATEGORY_NOT_FOUND = '"categoryIds" not found';

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

module.exports = {
  checkBody,
  checkIdcategory,
};