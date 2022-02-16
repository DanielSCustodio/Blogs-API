const joi = require('@hapi/joi');

const loginSchema = joi.object({
  email: joi.string().email({ tlds: { allow: false } }).required(),
  password: joi.string().min(6).required(),
});

module.exports = {
  loginSchema,
};