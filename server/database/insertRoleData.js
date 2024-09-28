require("dotenv").config({ path: "../config.env" });
const { Role } = require("../model/role");
const populateDatabase = require("../utils/populateDatabase.JS");
const mongoose = require("mongoose");

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");

    const rolesData = [
      {
        name: "Admin",
        description: "Administrator role with full access",
        permissions: [
          { name: "READ USERS" },
          { name: "WRITE USERS" },
          { name: "READ ARTICLES" },
          { name: "WRITE ARTICLES" },
        ],
      },
      {
        name: "Editor",
        description: "Editor role with limited access",
        permissions: [{ name: "READ ARTICLES" }, { name: "WRITE ARTICLES" }],
      },
      {
        name: "Writer",
        description: "Writer role with article creation access",
        permissions: [{ name: "WRITE ARTICLES" }],
      },
    ];

    await populateDatabase(rolesData, Role);
  } catch (error) {
    console.error("Database connection error: ", error.message);
  } finally {
    mongoose.connection.close();
  }
};

start();
