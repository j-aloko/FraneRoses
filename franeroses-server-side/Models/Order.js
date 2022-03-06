const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    userId: { type: String, unique: true },
    cart: { type: Array, default: [] },
    userInfo: { type: Array, default: [] },
    deliveryFee: { type: Number, required: true },
    status: { type: String, default: "Pending" },
    instruction: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
