const express = require("express");

const route = express.Router();
const { register } = require("../controller/controller");

route.post("/api/register", register);
module.exports = route;
