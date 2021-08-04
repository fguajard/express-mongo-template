const express = require("express");
const router = express.Router();
const Users = require("../models");

router.get("/", async (req, res) => {
  const users = await Users.find();
  res.send(users);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const doc = await Users.findOne({ _id: id });
  res.json(doc);
});

router.post("/", async (req, res) => {
  try {
    const usuario = new Users(req.body);
    const usuarioAgregado = await Users.save();
    res.json(usuarioAgregado);
  } catch (error) {
    res.send(error.message || "Error al crear un usuario");
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const usuario = req.body;
  try {
    const doc = await Users.updateOne({ _id: id }, usuario);
    res.json(doc);
  } catch (e) {
    res.json(e);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const doc = await Users.deleteOne({ _id: id });
  res.json(doc);
});

module.exports = router;
