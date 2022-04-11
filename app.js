const express = require("express");
const path = require("path");

const app = express();

app.listen(process.env.PORT || 3000, () => {
  console.log("Servidor creado con exito.");
});

app.use(express.static(path.join(__dirname, "public")));

app.get("/404", function (req, res) {
  res.send("Error página no encontrada");
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/register", function (req, res) {
  res.sendFile(path.join(__dirname, "/views/register.html"));
});
