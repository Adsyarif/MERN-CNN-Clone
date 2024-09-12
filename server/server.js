const express = require("express");
const { connectDB } = require("./database/connection");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const app = express();
const PORT = process.env.PORT || 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credential: true,
  })
);

app.use(bodyParser.json());
connectDB();
app.use("/", require("./router/router"));

const server = app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
