const mongoose = require("mongoose");

productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: Array, required: true, default: [] },
    category: { type: String, required: true, default: "" },
    brand: { type: String, default: "Golden Tree" },
    variant: [
      {
        name: { type: String, required: true, default: "" },
        size: { type: Array, default: [] },
        price: { type: Number, required: true },
        oldPrice: { type: Number, required: true },
        cost: { type: Number, required: true },
        quantity: { type: Number, required: true },
        inStock: { type: String, default: "in stock" },
        status: { type: String, default: "active" },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
