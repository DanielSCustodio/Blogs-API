const user = require('express').Router();
const userController = require('../controllers/userController');
const validationUser = require('../controllers/middlewares/validationUser');

user.post('/',
validationUser.checkBody,
validationUser.checkEmail,
userController.createUser);

module.exports = user;
