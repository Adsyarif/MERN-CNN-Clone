const response = require("../utils/apiResponse");
const bcrypt = require("bcrypt");
const { User } = require("../model/model");

const validatePassword = (password) => {
  const hasLowerCase = /[a-z]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSymbol = /[!@#$%^&*]/.test(password);
  const isLengthValid = password.length >= 8;

  return (
    hasLowerCase && hasUpperCase && hasNumber && hasSymbol && isLengthValid
  );
};

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isUserExist = await User.findOne({ email });

    if (isUserExist) {
      return response(res, 400, "Email is already registered.");
    }

    const checkPassword = validatePassword(password);

    if (!checkPassword) {
      return response(
        res,
        400,
        "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long."
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email: email,
      password: hashedPassword,
    });

    await newUser.save();
    response(res, 201, "User registered succressfully.");
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
