const usersService = require('../services/usersService');

const createUser = async (req, res) => {
  const { token } = await usersService.createUser(req.body);
  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};