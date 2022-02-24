const jwt = require('jsonwebtoken');
const { User } = require('../models');
const SECRET = require('../config/secret');

const createUser = async (user) => {
  const newUser = await User.create(user);
    const token = jwt.sign(newUser.dataValues, SECRET, {
      algorithm: 'HS256',
      expiresIn: '1d',
    });
  return { token };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

module.exports = {
  createUser,
  getAllUsers,
};