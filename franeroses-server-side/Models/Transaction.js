const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    fullname: { type: String },
    total: { type: Number },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", transactionSchema);
