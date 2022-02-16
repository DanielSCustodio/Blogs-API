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
    messageReceived: '"password" length must be at least 6 characters long',
    message: '"password" length must be 6 characters long',  
  },
  {
    status: 400,
    messageReceived: '"password" is required',
    message: '"password" is required',
  },
  {
    status: 409,
    messageReceived: 'User already registered',
    message: 'User already registered',
  },

];