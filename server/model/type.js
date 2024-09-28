const mongoose = require("mongoose");

const typeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const Type = mongoose.model("Type", typeSchema);

module.exports = {
  Type: Type,
};
