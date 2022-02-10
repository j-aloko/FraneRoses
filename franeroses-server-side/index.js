const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");
const authRoute = require("./Routes/auth");
const userRoute = require("./Routes/user");
const productRoute = require("./Routes/product");
const cartRoute = require("./Routes/cart");
const orderRoute = require("./Routes/order");
const wishlistRoute = require("./Routes/wishlist");

dotenv.config();

app.listen(process.env.PORT || 8080, () => {
  console.log("server is running");
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to Mongo_DB"))
  .catch((err) => console.log("MongoDB connection failed"));

app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(morgan("common"));
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);
app.use("/api/wishlist", wishlistRoute);
