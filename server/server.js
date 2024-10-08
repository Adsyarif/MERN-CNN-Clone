const express = require("express");
const { connectDB } = require("./database/connection");
const cors = require("cors");
const bodyParser = require("body-parser");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });
const app = express();
const PORT = process.env.PORT || 8080;
const userRoutes = require("./router/user");
const newsRoutes = require("./router/news");

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credentials: true,
  })
);

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
  })
);

connectDB();

app.use(bodyParser.json());
app.use("/", userRoutes);
app.use("/", newsRoutes);

const server = app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
