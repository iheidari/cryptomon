const mongoose = require("mongoose");
const { model, schema } = require("../schema/currency");

const save = (data) => {
  const currency = new model(data);
  currency.save(function (err) {
    if (err) return handleError(err);
    console.log("saved");
  });
};

const load = () => {
  const currency = mongoose.model("Currency", schema);
  return currency.find({});
};

module.exports = { load, save };
