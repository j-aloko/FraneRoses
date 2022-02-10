const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, unique: true },
    products: [
      {
        productId: { type: String },
        productName: { type: String, required: true },
        quantity: { type: Number, default: 1 },
        size: { type: Array, default: [] },
        amount: { type: Number, default: 0 },
      },
    ],
    subtotal: { type: Number, required: true },
    total: { type: Number, required: true },
    delivery: { type: Number, required: true },
    fullname: { type: String, default: "" },
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    region: { type: String, default: "" },
    city: { type: String, default: "" },
    apartmentSuite: { type: String, default: "" },
    status: { type: String, default: "Pending" },
    instruction: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
