const express = require("express");
const route = express.Router();
const {
  getNewsType,
  getNewsCategory,
  getNewsTag,
} = require("../controller/news");

route.get("/api/newsTypes", getNewsType);
route.get("/api/newsCategories", getNewsCategory);
route.get("/api/newsTags", getNewsTag);
// route.get("/api/newsSubCategories/:catName", getNewsSubCategory);
// route.get("/api/isAuth", isAuth);
module.exports = route;
