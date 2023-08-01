const mongoose = require("mongoose");

const ItemTypeEspecific = mongoose.model("ItemTypeEspecific", {
  name: { type: String, required: true },
  item_type_id: { type: mongoose.Schema.Types.ObjectId, ref: 'ItemType', required: true },
});

module.exports = ItemTypeEspecific;
