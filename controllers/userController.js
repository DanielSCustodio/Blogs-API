const usersService = require('../services/usersService');

const createUser = async (req, res) => {
  const { token } = await usersService.createUser(req.body);
  return res.status(201).json({ token });
};

const getAllUsers = async (req, res) => {
  const allUsers = await usersService.getAllUsers();
  res.status(200).json(allUsers);
};
module.exports = {
  createUser,
  getAllUsers,
};
