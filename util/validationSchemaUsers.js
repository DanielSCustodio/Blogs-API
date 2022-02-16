/* consulta: https://www.youtube.com/watch?v=u9kxYilQ9l8 */
/* consulta: https://stackoverflow.com/questions/57972358/joi-email-validation/59654867 */
const joi = require('@hapi/joi');

const userSchema = joi.object({
  displayName: joi.string().min(8).required(),
  email: joi.string().email({ tlds: { allow: false } }).required(),
  password: joi.string().min(6).required(),
  image: joi.string(),
});

module.exports = {
  userSchema,
};