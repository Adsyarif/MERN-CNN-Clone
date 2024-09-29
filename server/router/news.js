const express = require("express");
const route = express.Router();
const { getNewsType } = require("../controller/news");

route.get("/api/types", getNewsType);
// route.post("/api/login", login);
// route.get("/api/isAuth", isAuth);
module.exports = route;
