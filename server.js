const express = require("express");
const usersRouter = require("./routes/users");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

app.use("/users", usersRouter);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/public/index/index.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname + "/public/404.html"));
});

app.listen(process.env.PORT || 3000, () => console.log(`Server started`));
