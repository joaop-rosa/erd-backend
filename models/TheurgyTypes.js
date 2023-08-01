const mongoose = require("mongoose");

const TheurgyTypes = mongoose.model("TheurgyTypes", {
  name: { type: String, required: true },
  necessary_hands: { type: Number, required: true },
});

module.exports = TheurgyTypes;
