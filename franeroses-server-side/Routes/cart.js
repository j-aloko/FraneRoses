const Cart = require("../Models/Cart");

const router = require("express").Router();

//Creating a Cart
router.post("/", async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//update Cart

router.put("/:id", async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Cart

router.delete("/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get one Cart

router.get("/find:/userId", async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all Product

router.get("/", async (req, res) => {
  try {
    const allCart = await Cart.find();
    res.status(200).json(allCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
