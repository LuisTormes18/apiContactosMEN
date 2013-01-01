const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const Error404 = require("./middlewares/404");
const path = require("path");

// Inicializar Expres
const app = express();

// Settings
require("dotenv").config();
const port = process.env.PORT || 4001;

// middelwars
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", express.static(path.join(__dirname) + "/public"));

// cors
app.use(cors());

// Logger
app.use(logger("dev"));

// Routes
app.use("/api", require("./routes/routes"));
app.use("*", Error404);

// Run server
app.listen(port, () => {
  console.log("Server Runing on port " + port);
});

module.exports = app;
