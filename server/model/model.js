const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    reqired: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    reqired: true,
    validate: {
      validator: (value) => {
        const hasLowerCase = /[a-z]/.test(value);
        const hasUpperCase = /[A-Z]/.test(value);
        const hasNumber = /[\d]/.test(value);
        const hasSymbol = /[!@#$%^&*]/.test(value);
        const isLengthValid = value.length >= 8;

        return (
          hasLowerCase &&
          hasUpperCase &&
          hasNumber &&
          hasSymbol &&
          isLengthValid
        );
      },
      message:
        "Password must contain at least one lowercase letter, one uppercase letter, one number, one special character, and be at least 8 characters long",
    },
  },
  role: {
    type: String,
  },
  bio: {
    type: String,
  },
  profilePhoto: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User: User,
};
