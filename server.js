const mongoose = require("mongoose");
const { save, load } = require("./controller/currencyController");
const {
  LoadCurrenciesMetadata,
} = require("./controller/dataGathererController");
const { mongodbUser, mongodbPassword, mongodbURL } = require("./config");

// mongoose.connect(
//   `mongodb+srv://${mongodbUser}:${mongodbPassword}@${mongodbURL}`,
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("Connected to db");
//   load(db).then((result) => console.log(result));
// });

LoadCurrenciesMetadata();
