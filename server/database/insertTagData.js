require("dotenv").config({ path: "../config.env" });
const { Tag } = require("../model/tag");
const populateDatabase = require("../utils/populateDatabase.JS");
const mongoose = require("mongoose");

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");

    const tagsData = [
      { name: "Analysis" },
      { name: "Opinion" },
      { name: "Watch" },
    ];

    await populateDatabase(tagsData, Tag);
  } catch (error) {
    console.error("Database connection error: ", error.message);
  } finally {
    mongoose.connection.close();
  }
};

start();
