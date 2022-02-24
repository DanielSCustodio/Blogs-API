const jwt = require('jsonwebtoken');
const { User } = require('../models');
const JWT_DATA = require('../util/jwtConfig');

const createUser = async (user) => {
  const newUser = await User.create(user);
    const token = jwt.sign(newUser.dataValues, 'SECRET', JWT_DATA);
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