const { blogPostSchema } = require('../../util/validationSchemaBlogPosts');
const sendResponse = require('./responseError');
const { Category } = require('../../models');

const CATEGORY_NOT_FOUND = '"categoryIds" not found';

const checkBody = async (req, res, next) => {
    console.log('checkBody ====> PASSOU AQUI');
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
  console.log('checkIdcategory ====> PASSOU AQUI');
  const { categoryIds } = await req.body;

    categoryIds.map(async (id) => {
      const result = await Category.findByPk(id);
      if (!result) {
        const { status, message } = await sendResponse(CATEGORY_NOT_FOUND);
        return res.status(status).json({ message });
      }
    });
  next();
};

module.exports = {
  checkBody,
  checkIdcategory,
};