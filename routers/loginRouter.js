const login = require('express').Router();
const loginController = require('../controllers/loginController');
const validationLogin = require('../controllers/middlewares/validationLogin');

login.post('/',
  validationLogin.checkBody,
  validationLogin.checkFields,
  loginController.login);

module.exports = login;
