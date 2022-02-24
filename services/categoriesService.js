const { Category } = require('../models');

const createCategory = async (category) => {
  const newCategory = await Category.create(category);
  return newCategory;
};

const getAllCategories = async () => {
  const allCategories = await Category.findAll();
  return allCategories;
};

module.exports = {
  createCategory,
  getAllCategories,
};