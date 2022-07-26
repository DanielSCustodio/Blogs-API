const usersService = require('../services/usersService');

const createUser = async (req, res) => {
  const { token } = await usersService.createUser(req.body);
  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const allUsers = await usersService.getAllUsers();
  res.status(200).json(allUsers);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await usersService.getUserById(id);
  return res.status(200).json(user);
};

const deleteUser = async (req, res) => {
  const token = req.headers.authorization;
  await usersService.deleteUser(token);
  res.status(204).json();
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
};
