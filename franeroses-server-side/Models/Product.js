const mongoose = require("mongoose");

productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: Array, required: true, default: [] },
    category: { type: Array, required: true },
    size: { type: Array, required: true, default: [] },
    brand: { type: String, default: "Golden Tree" },
    price: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    outOfStock: { type: Boolean, default: true },
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
