module.exports = [
  {
    status: 400,
    messageReceived: '"displayName" length must be at least 8 characters long',
    message: '"displayName" length must be at least 8 characters long',
  },

  {
    status: 400,
    messageReceived: '"email" must be a valid email',
    message: '"email" must be a valid email',
  },

  {
    status: 400,
    messageReceived: '"email" is required',
    message: '"email" is required',
  },

  {
    status: 400,
    messageReceived: '"name" is required',
    message: '"name" is required',
  },

  {
    status: 400,
    messageReceived: '"password" length must be at least 6 characters long',
    message: '"password" length must be 6 characters long',  
  },

  {
    status: 400,
    messageReceived: '"password" is required',
    message: '"password" is required',
  },

  {
    status: 400,
    messageReceived: '"content" is required',
    message: '"content" is required',
  },

  {
    status: 400,
    messageReceived: '"categoryIds" is required',
    message: '"categoryIds" is required',
  },

  {
    status: 400,
    messageReceived: '"title" is required',
    message: '"title" is required',
  },

  {
    status: 409,
    messageReceived: 'User already registered',
    message: 'User already registered',
  },

  {
    status: 400,
    messageReceived: '"email" is not allowed to be empty',
    message: '"email" is not allowed to be empty',
  },

  {
    status: 400,
    messageReceived: '"password" is not allowed to be empty',
    message: '"password" is not allowed to be empty',
  },

  {
    status: 400,
    messageReceived: 'Invalid fields',
    message: 'Invalid fields',
  },

  {
    status: 401,
    messageReceived: 'Token not found',
    message: 'Token not found',
  },

  {
    status: 401,
    messageReceived: 'Expired or invalid token',
    message: 'Expired or invalid token',
  },

  {
    status: 401,
    messageReceived: 'Unauthorized user',
    message: 'Unauthorized user',
  },

  {
    status: 400,
    messageReceived: '"categoryIds" not found',
    message: '"categoryIds" not found',
  },

  {
    status: 400,
    messageReceived: '"categoryIds" is not allowed',
    message: 'Categories cannot be edited',
  },

  {
    status: 404,
    messageReceived: 'User does not exist',
    message: 'User does not exist',
  },

  {
    status: 404,
    messageReceived: 'Post does not exist',
    message: 'Post does not exist',
  },

];