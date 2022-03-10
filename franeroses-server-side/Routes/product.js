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

// GET MONTHLY COST

router.get("/cost", async (req, res) => {
  const productId = req.query.pid;
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const cost = await Products.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            $elemMatch: { _id },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          cost: "$cost",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$cost" },
        },
      },
    ]);
    res.status(200).json(cost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
