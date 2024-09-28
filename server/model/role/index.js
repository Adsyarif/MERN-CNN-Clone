const mongoose = require("mongoose");
const permissionSchema = require("./permission");

const roleSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  permission: [permissionSchema],
});

const Role = mongoose.model("Role", roleSchema);

module.exports = {
  Role: Role,
};
