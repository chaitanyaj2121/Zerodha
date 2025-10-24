const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

const HoldingsModel = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await mongoose.connection.db
    .collection("holdings")
    .find({})
    .toArray();

  // let allHoldings = await HoldingsModel.find({});  // Alternative using Mongoose model

  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:3000");
  mongoose.connect(uri);
  console.log("Connected to MongoDB");
});
