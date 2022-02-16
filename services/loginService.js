const jwt = require('jsonwebtoken');
const SECRET = require('../config/secret');

const login = async (user) => {
  const token = jwt.sign(user, SECRET, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

  return {
    token,
  };
};

module.exports = {
  login,
};