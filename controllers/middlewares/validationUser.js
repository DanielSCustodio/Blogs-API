const { userSchema } = require('../../util/validationSchemaUsers');
const sendResponse = require('./responseError');
const { User } = require('../../models');

const EMAIL_EXIST = 'User already registered';
const ID_NOT_EXIST = 'User does not exist';

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  const result = await User.findOne({ where: { email } });
  if (result) {
    const { status, message } = await sendResponse(EMAIL_EXIST);
    return res.status(status).json({ message });
  }
  next(); 
}; 

const checkBody = async (req, res, next) => {
  try {
    await userSchema.validateAsync(req.body);
  } catch (error) {
    const err = (error.details[0]);
    const { status, message } = await sendResponse(err.message);
    return res.status(status).json({ message });
  }
  next();
};

const checkId = async (req, res, next) => {
  const { id } = req.params;
  const result = await User.findByPk(id);
  if (!result) {
    const { status, message } = await sendResponse(ID_NOT_EXIST);
    return res.status(status).json({ message });
  }
  next();
};

module.exports = {
  checkBody,
  checkEmail,
  checkId,
};