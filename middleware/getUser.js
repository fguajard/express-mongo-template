const Users = require("../models");

const getUser = async (req, res, next) => {
  let user;
  try {
    const { id } = req.params;
    user = await Users.findById(id);
    if (!user) {
      return res.status(404).json({ message: "Usuario no Existe" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.user = user;
  next();
};

module.exports = getUser;
