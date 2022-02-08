const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    phone: { type: String, default: "" },
    birth: { type: String, default: "" },
    img: { type: String, default: "" },
    region: { type: String, default: "" },
    city: { type: String, default: "" },
    apartmentSuite: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
