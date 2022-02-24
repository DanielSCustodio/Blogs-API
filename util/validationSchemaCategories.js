const joi = require('@hapi/joi');

const categorySchema = joi.object({
  name: joi.string().min(1).required(),
});

module.exports = {
  categorySchema,
};