const { Type } = require("../model/type");
const { Category } = require("../model/category");
const apiResponse = require("../utils/apiResponse");

exports.getNewsType = async (req, res) => {
  try {
    const allTypes = await Type.find();
    // apiResponse(res, 200, "Get all news types success.", allTypes);
    res.json(allTypes);
  } catch (error) {
    apiResponse(res, 500, "Internal servcer error.");
  }
};

exports.getNewsCategory = async (req, res) => {
  try {
    const allCategory = await Category.find();
    console.log(allCategory);
    // apiResponse(res, 200, "Get all news types success.", allTypes);
    res.json(allCategory);
  } catch (error) {
    apiResponse(res, 500, "Internal servcer error.");
  }
};
