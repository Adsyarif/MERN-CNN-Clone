const express = require("express");

const route = express.Router();
const { register, login, isAuth } = require("../controller/user");

route.post("/api/register", register);
route.post("/api/login", login);
route.get("/api/isAuth", isAuth);
module.exports = route;
