const jwt = require('jsonwebtoken');
const { User } = require('../models');
const JWT_DATA = require('../util/jwtConfig');

// consulta: https://stackoverflow.com/questions/27972271/sequelize-dont-return-password
const HANDLE_PASSWORD = {
  attributes: {
    exclude: ['password'],
  },
};
const createUser = async (user) => {
  const newUser = await User.create(user);
    const token = jwt.sign(newUser.dataValues, 'SECRET', JWT_DATA);
  return { token };
};

const getAllUsers = async () => {
  const allUsers = await User.findAll(HANDLE_PASSWORD);
  return allUsers;
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, HANDLE_PASSWORD);
  return user;
};

const deleteUser = async (token) => {
  const decode = jwt.decode(token);
  const { email } = decode; 
  const { id } = await User.findOne({ where: { email } });
  return User.destroy({ where: { id } });
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
