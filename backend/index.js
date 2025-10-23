const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
  mongoose.connect(uri);
  console.log("Connected to MongoDB");
});
