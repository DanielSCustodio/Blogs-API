const joi = require('@hapi/joi');

const blogPostSchema = joi.object({
  title: joi.required(),
  content: joi.required(),
  categoryIds: joi.required(),
});

module.exports = {
  blogPostSchema,
};