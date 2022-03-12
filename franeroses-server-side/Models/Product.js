const mongoose = require("mongoose");

productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: Array, required: true, default: [] },
    category: { type: String, required: true, default: "" },
    subCategory: { type: String, required: true, default: "" },
    brand: { type: String, default: "Golden Tree" },
    size: { type: String, default: "carton" },
    price: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    cost: { type: Number, required: true },
    sales: { type: Number, default: 0 },
    qty: { type: Number, required: true },
    inStock: { type: String, default: "in stock" },
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
