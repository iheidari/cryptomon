const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  timestamp: Date,
  rate: Number,
  currency: String,
});

module.exports = mongoose.model("ExchangeRate", schema);
