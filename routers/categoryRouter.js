const category = require('express').Router();
const validationCategory = require('../controllers/middlewares/validationCategory');
const validationToken = require('../controllers/middlewares/validationToken');
const categoryController = require('../controllers/categoryController');

category.post('/',
  validationToken.findToken,
  validationToken.checkToken,
  validationCategory.checkName,
  categoryController.createCategoy);

  category.get('/',
    validationToken.findToken,
    validationToken.checkToken,
    categoryController.getAllCategories);

  module.exports = category;