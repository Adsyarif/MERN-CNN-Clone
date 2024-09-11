const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const server = app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
