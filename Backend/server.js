const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const colors = require("colors");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is running.");
});

const PORT = process.env.PORT;

app.listen(PORT, console.log(`Server started on port ${PORT}`.yellow.bold));
