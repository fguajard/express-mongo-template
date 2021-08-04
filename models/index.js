const { model } = require("../db/conexion");
const { usuarioSchema } = require("../schemas");

const Users = model("usuarios", usuarioSchema);

module.exports = Users;
