const { userSchema } = require('../../util/validationSchemaUsers');
const sendResponse = require('./responseError');
const { User } = require('../../models');

const EMAIL_EXISTS = 'User already registered';

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  console.log('Email:====>', email);
  const result = await User.findOne({ where: { email } });
    console.log('result:====>', result);
  if (result) {
    const { status, message } = await sendResponse(EMAIL_EXISTS);
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

module.exports = {
  checkBody,
  checkEmail,
};