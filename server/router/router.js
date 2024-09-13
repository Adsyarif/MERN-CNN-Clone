const express = require("express");

const route = express.Router();
const { register, login } = require("../controller/user");

route.post("/api/register", register);
route.post("/api/login", login);
module.exports = route;
