const mongoose = require("mongoose");

const ItemType = mongoose.model("ItemType", {
  name: { type: String, required: true },
  necessary_hands: { type: Number, required: true },
});

module.exports = ItemType;
