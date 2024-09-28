const mongoose = require("mongoose");
const subCategorySchema = require("./subCategory");

const categorySchema = new mongoose.Schema({
  title: {
    type: String,
  },
  items: [subCategorySchema],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = {
  Category: Category,
};
