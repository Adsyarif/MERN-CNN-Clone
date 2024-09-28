require("mongoose");

const populateDatabase = async (data, model) => {
  try {
    await model.deleteMany({});
    await model.insertMany(data);
    console.log("Database populated successfully!");
  } catch (error) {
    console.error("Error populating database: ", error.message);
  }
};

module.exports = populateDatabase;
