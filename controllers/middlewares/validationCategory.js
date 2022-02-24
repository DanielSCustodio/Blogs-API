const { categorySchema } = require('../../util/validationSchemaCategories');
const sendResponse = require('./responseError');

const checkName = async (req, res, next) => {
  try {
    await categorySchema.validateAsync(req.body);
  } catch (error) {
    const err = (error.details[0]);
    const { status, message } = await sendResponse(err.message);
    return res.status(status).json({ message }); 
}
  next();
};

module.exports = {
  checkName,
};