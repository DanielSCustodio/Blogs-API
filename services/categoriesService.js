const { Category } = require('../models');

const createCategory = async (category) => {
  const newCategory = await Category.create(category);
  return newCategory;
};

module.exports = {
  createCategory,
};