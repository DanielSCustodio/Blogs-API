const categoriesService = require('../services/categoriesService');

const createCategoy = async (req, res) => {
  const newCategory = await categoriesService.createCategory(req.body);
  return res.status(201).json(newCategory);
};

const getAllCategories = async (req, res) => {
  const allCategories = await categoriesService.getAllCategories();
  return res.status(200).json(allCategories);
};

module.exports = {
  createCategoy,
  getAllCategories,
};