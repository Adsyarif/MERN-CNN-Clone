require("dotenv").config({ path: "../config.env" });
const { Type } = require("../model/type");
const populateDatabase = require("../utils/populateDatabase.JS");
const mongoose = require("mongoose");

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");

    const newsTypesData = [
      { name: "General" },
      { name: "Breaking" },
      { name: "Featured" },
      { name: "Video Tiles" },
      { name: "Photo Tiles" },
      { name: "Paid Content" },
      { name: "Advertisement" },
      { name: "Live Update" },
    ];

    await populateDatabase(newsTypesData, Type);
  } catch (error) {
    console.error("Database connection error: ", error.message);
  } finally {
    mongoose.connection.close();
  }
};

start();
