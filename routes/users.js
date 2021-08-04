const express = require("express");
const router = express.Router();
const Users = require("../models");
const getUser = require("../middleware/getUser");

//GETTING ALL
router.get("/", async (req, res) => {
  try {
    const usuarios = await Users.find();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//GETTING ONE
router.get("/:id", getUser, (req, res) => {
  res.status(200).json(res.user);
});

//CREATING ONE
router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    const usuario = new Users(payload);
    const usuarioAgregado = await usuario.save();
    res.status(201).json(usuarioAgregado);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});

//UPDATING ONE

router.patch("/:id", getUser, async (req, res) => {
  const body = req.body;
  if (body.name) res.user.name = body.name;
  if (body.age) res.user.age = body.age;
  try {
    const usuarioModificado = await res.user.save();
    res.status(200).json(usuarioModificado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//DELETING ONE

router.delete("/:id", getUser, async (req, res) => {
  try {
    const usuarioEliminado = await res.user.remove();
    res.status(200).json({ message: "Uusario Eliminado", usuarioEliminado });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
