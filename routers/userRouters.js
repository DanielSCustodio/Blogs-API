const user = require('express').Router();
const userController = require('../controllers/userController');
const validationUser = require('../controllers/middlewares/validationUser');
const validationToken = require('../controllers/middlewares/validationToken');

user.post('/',
validationUser.checkBody,
validationUser.checkEmail,
userController.createUser);

user.get('/',
validationToken.findToken,
validationToken.checkToken,
userController.getAllUsers);

module.exports = user;
