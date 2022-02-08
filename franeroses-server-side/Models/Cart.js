const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [
      {
        productId: { type: String },
        quantity: { type: Number, default: 1 },
        size: { type: String, default: "" },
        amount: { type: Number, default: 0 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
