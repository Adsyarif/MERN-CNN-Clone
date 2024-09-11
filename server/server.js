const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
    credential: true,
  })
);

app.use("/", require("./router/router"));

const server = app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
