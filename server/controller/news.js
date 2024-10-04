const { Type } = require("../model/type");
const { Category } = require("../model/category");
const { Tag } = require("../model/tag");
const apiResponse = require("../utils/apiResponse");

exports.getNewsType = async (req, res) => {
  try {
    const allTypes = await Type.find();
    res.json(allTypes);
  } catch (error) {
    apiResponse(res, 500, "Internal servcer error.");
  }
};

exports.getNewsCategory = async (req, res) => {
  try {
    const allCategory = await Category.find();
    res.json(allCategory);
  } catch (error) {
    apiResponse(res, 500, "Internal servcer error.");
  }
};

exports.getNewsTag = async (req, res) => {
  try {
    const allTags = await Tag.find();
    res.json(allTags);
  } catch (error) {
    apiResponse(res, 500, "Internal servcer error.");
  }
};
exports.getLastFiveLiveUpdateType = async (req, res) => {
  try {
  } catch (error) {
    apiResponse(res, 500, "Internal servcer error.");
  }
};

// SSR SUB CATEGORies
// exports.getNewsSubCategory = async (req, res) => {
//   const selectedCategory = req.params.catName;
//   try {
//     const category = await Category.findOne({ title: selectedCategory });
//     if (!allSubCategory) {
//       return apiResponse(res, 500, "Category not found.");
//     }
//     res.json(category.items);
//   } catch (error) {
//     apiResponse(res, 500, "Internal servcer error.");
//   }
// };
