const loginService = require('../services/loginService');

const login = async (req, res) => {
  const { token } = await loginService.login(req.body); 
  res.status(200).json({ token });
};

module.exports = {
  login,
};
