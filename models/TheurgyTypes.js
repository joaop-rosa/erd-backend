import mongoose from "mongoose"

const TheurgyTypes = mongoose.model("TheurgyTypes", {
  name: { type: String, required: true },
  necessary_hands: { type: Number, required: true },
});

export default TheurgyTypes;
