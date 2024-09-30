const express = require("express");
const route = express.Router();
const { getNewsType, getNewsCategory } = require("../controller/news");

route.get("/api/newsTypes", getNewsType);
route.get("/api/newsCategories", getNewsCategory);
// route.get("/api/newsSubCategories", getNewsSubCategory);
// route.get("/api/isAuth", isAuth);
module.exports = route;
