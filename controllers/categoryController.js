const categoriesService = require('../services/categoriesService');

const createCategoy = async (req, res) => {
  const newCategory = await categoriesService.createCategory(req.body);
  return res.status(201).json(newCategory);
};

module.exports = {
  createCategoy,
};