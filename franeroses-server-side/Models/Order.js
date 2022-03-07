const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String },
    cart: { type: Array, default: [] },
    userInfo: { type: Object, default: {} },
    email: { type: String, default: "" },
    subtotal: { type: Number },
    deliveryFee: { type: Number },
    total: { type: Number },
    status: { type: String, default: "Pending" },
    instruction: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
