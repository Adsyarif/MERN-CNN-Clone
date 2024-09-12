const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
      unique: true,
      match: [/^\+?\d{10,15}$/, "Please enter a valid phone number"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address."],
    },
    password: {
      type: String,
      required: true,
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
      enum: ["user", "admin", "moderator"], // Contoh enum jika ada batasan role tertentu
    },
    bio: {
      type: String,
      trim: true,
    },
    profilePhoto: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = {
  User: User,
};
