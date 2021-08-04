const { Schema } = require("../db/conexion");

const usuarioSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dateLogin: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = { usuarioSchema };
