const mongoose = require("mongoose");
require("dotenv").config();

// mongodb://localhost:27017/users

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dataBase = mongoose.connection;

dataBase.on("error", (error) => console.log("Cant Connect to Database", error));

dataBase.once("open", () => console.log("Connected to Database"));

module.exports = mongoose;
