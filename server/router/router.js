const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

route.post("/api/register", controller.register);
module.exports = route;
