import mongoose from "mongoose"

const ItemType = mongoose.model("ItemType", {
  name: { type: String, required: true },
  necessary_hands: { type: Number, required: true },
});

export default ItemType;
