const jwt = require('jsonwebtoken');
const SECRET = require('../../config/secret');

const sendResponse = require('./responseError');

const TOKEN_NOT_FOUND = 'Token not found';

const findToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    const { status, message } = await sendResponse(TOKEN_NOT_FOUND);
    return res.status(status).json({ message });
  }
  next();
};

const checkToken = async (req, res, _next) => {
  const token = req.headers.authorization;

  const result = jwt.verify(token, SECRET, {
    algorithm: 'HS256',
    expiresIn: '1d',
  });

  console.log('RESULT ======>', result);
  return res.status(401).json({ message: 'Expired or invalid token' });
};

module.exports = {
  findToken,
  checkToken,
};