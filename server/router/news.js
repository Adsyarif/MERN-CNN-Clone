const express = require("express");
const route = express.Router();
const {
  getNewsType,
  getNewsCategory,
  getNewsTag,
  getLastFiveLiveUpdateType,
} = require("../controller/news");

route.get("/api/newsTypes", getNewsType);
route.get("/api/newsCategories", getNewsCategory);
route.get("/api/newsTags", getNewsTag);
route.get("/api/lastFiveLiveUpdateType", getLastFiveLiveUpdateType);
// route.get("/api/newsSubCategories/:catName", getNewsSubCategory);
module.exports = route;
