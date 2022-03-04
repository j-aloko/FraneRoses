const Products = require("../Models/Product");

const router = require("express").Router();

//Create Product
router.post("/", async (req, res) => {
  const newProduct = new Products(req.body);
  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Update Product

router.put("/:id", async (req, res) => {
  try {
    const updatedProduct = await Products.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete Product

router.delete("/:id", async (req, res) => {
  try {
    await Products.findByIdAndDelete(req.params.id);
    res.status(200).json("Product Successfully deleted");
  } catch (err) {
    res.status(err).json(err);
  }
});

//Get Product
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Get All Products
router.get("/", async (req, res) => {
  const qCategory = req.query.cat;
  const qsubCategory = req.query.subCat;
  try {
    let products;
    if (qCategory) {
      products = await Products.find({
        category: {
          $in: [qCategory],
        },
      });
    } else if (qsubCategory) {
      products = await Products.find({
        subCategory: {
          $in: [qsubCategory],
        },
      });
    } else {
      products = await Products.find();
    }
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
