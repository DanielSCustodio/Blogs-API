const jwt = require('jsonwebtoken');
const JWT_DATA = require('../util/jwtConfig');

const login = async (user) => {
  const token = jwt.sign(user, 'SECRET', JWT_DATA);
  return {
    token,
  };
};

module.exports = {
  login,
};