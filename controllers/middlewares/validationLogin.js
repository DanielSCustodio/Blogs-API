const { loginSchema } = require('../../util/validationSchemaLogin');
const sendResponse = require('./responseError');
const { User } = require('../../models');

const INVALID_FIELDS = 'Invalid fields';

const checkFields = async (req, res, next) => {
  const { email } = req.body;
  const result = await User.findOne({ where: { email } });
  if (result === null) {
    const { status, message } = await sendResponse(INVALID_FIELDS);
    return res.status(status).json({ message });
  }
  next(); 
}; 

const checkBody = async (req, res, next) => {
  try {
    await loginSchema.validateAsync(req.body);
  } catch (error) {
    const err = (error.details[0]);
    const { status, message } = await sendResponse(err.message);
    return res.status(status).json({ message });
  }
  next();
};

module.exports = {
  checkBody,
  checkFields,
};