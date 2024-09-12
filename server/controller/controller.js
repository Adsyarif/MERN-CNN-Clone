const response = require("../utils/apiResponse");
const bcrypt = require("bcrypt");
const { User } = require("../model/model");

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return response(res, 400, "Email is already registered");
    }

    const hashedPasword = await bcrypt.hash(password, 10);
    const newUser = new User({ email: email, password: hashedPasword });

    await newUser.save();
    response(res, 201, "User registered succressfully");
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = {};
      for (const field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }
      return response(res, 400, validationErrors);
    }
  }
  console.log("Its a post request to register a user.");
  console.log("req is: ", req.body);
};
