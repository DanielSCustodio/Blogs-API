const jwt = require('jsonwebtoken');

const sendResponse = require('./responseError');
const JWT_DATA = require('../../util/jwtConfig');

const TOKEN_NOT_FOUND = 'Token not found';
const EXPIRED_OR_INVALID = 'Expired or invalid token';

const findToken = async (req, res, next) => {
  console.log('findToken ====> PASSOU AQUI');
  const token = req.headers.authorization;
  if (!token) {
    const { status, message } = await sendResponse(TOKEN_NOT_FOUND);
    return res.status(status).json({ message });
  }
  next();
};

const checkToken = async (req, res, next) => {
  console.log('checkToken ====> PASSOU AQUI');
  const token = req.headers.authorization;
  try {
    jwt.verify(token, 'SECRET', JWT_DATA); next(); 
  } catch (error) {
      const { status, message } = await sendResponse(EXPIRED_OR_INVALID);
    return res.status(status).json({ message });
  }
};

module.exports = {
  findToken,
  checkToken,
};