const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    productId: { type: String },
    productName: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    size: { type: Array, default: [] },
    img: { type: Array, required: true, default: [] },
    price: { type: Number },
    amount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wishlist", wishlistSchema);
