const router = require("express").Router();
const Transaction = require("../Models/Transaction");

//create transactions
router.post("/", async (req, res) => {
  const transaction = new Transaction(req.body);
  try {
    const savedtransaction = await transaction.save();
    res.status(200).json(savedtransaction);
  } catch (err) {
    res.status(500).json(err);
  }
});

//find all transactions

router.get("/", async (req, res) => {
  try {
    const transaction = await Transaction.find()
      .sort({ createdAt: -1 })
      .limit(5);
    res.status(200).json(transaction);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
