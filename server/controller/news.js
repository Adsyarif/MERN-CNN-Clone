const { Type } = require("../model/type");
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
