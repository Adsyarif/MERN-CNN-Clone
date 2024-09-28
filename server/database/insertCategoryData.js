require("dotenv").config({ path: "../config.env" });
const { Category } = require("../model/category");
const mongoose = require("mongoose");

const populateDatabase = async (data) => {
  try {
    await Category.deleteMany({});
    await Category.insertMany(data);
    console.log("Database populated successfully!");
  } catch (error) {
    console.error("Error populating database: ", error.message);
  }
};

const start = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in environment variables.");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB Atlas");

    const CategoryData = [
      {
        title: "World",
        items: [
          { name: "Africa" },
          { name: "Americas" },
          { name: "Asia" },
          { name: "Australia" },
          { name: "China" },
          { name: "Europe" },
          { name: "India" },
          { name: "Middle East" },
          { name: "United Kingdom" },
        ],
      },
      {
        title: "US Politics",
        items: [
          { name: "The Biden Presidency" },
          { name: "Facts First" },
          { name: "2024 Elections" },
        ],
      },
      {
        title: "Business",
        items: [
          { name: "Markets" },
          { name: "Tech" },
          { name: "Media" },
          { name: "Calculators" },
          { name: "Videos" },
        ],
      },
      {
        title: "Health",
        items: [
          { name: "Life, But Better" },
          { name: "Fitness" },
          { name: "Food" },
          { name: "Sleep" },
          { name: "Mindfulness" },
          { name: "Relationships" },
        ],
      },
      {
        title: "Entertainment",
        items: [
          { name: "Movies" },
          { name: "Television" },
          { name: "Celebrity" },
        ],
      },
      {
        title: "Tech",
        items: [
          { name: "Innovate" },
          { name: "Gadget" },
          { name: "Foreseeable Future" },
          { name: "Mission: Ahead" },
          { name: "Upstarts" },
          { name: "Work Transformed" },
          { name: "Innovative Cities" },
        ],
      },
      {
        title: "Style",
        items: [
          { name: "Arts" },
          { name: "Design" },
          { name: "Fashion" },
          { name: "Architecture" },
          { name: "Luxury" },
          { name: "Beauty" },
          { name: "Video" },
        ],
      },
    ];

    await populateDatabase(CategoryData);
  } catch (error) {
    console.error("Database connection error: ", error.message);
  } finally {
    mongoose.connection.close();
  }
};

start();
