const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    productId: { type: String },
    productName: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    size: { type: String, default: "carton" },
    img: { type: Array, required: true, default: [] },
    amount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
