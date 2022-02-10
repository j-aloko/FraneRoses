const Wishlist = require("../Models/Wishlist");

const router = require("express").Router();

//Creating a Wishlist
router.post("/", async (req, res) => {
  const newWishlist = new Wishlist(req.body);
  try {
    const savedWishlist = await newWishlist.save();
    res.status(200).json(savedWishlist);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Wishlist

router.delete("/:id", async (req, res) => {
  try {
    await Wishlist.findByIdAndDelete(req.params.id);
    res.status(200).json("Item Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get one Users Wishlist

router.get("/find:/userId", async (req, res) => {
  try {
    const Wishlist = await Wishlist.findOne({ userId: req.params.userId });
    res.status(200).json(Wishlist);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get all Wishlist

router.get("/", async (req, res) => {
  try {
    const allWishlist = await Wishlist.find();
    res.status(200).json(allWishlist);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
