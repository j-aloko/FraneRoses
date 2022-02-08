const router = require("express").Router();
const User = require("../Models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER USERS API

router.post("/register", async (req, res) => {
  const newUser = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_JS_SECRET_KEY
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN API

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const bytes = CryptoJS.AES.decrypt(
      user.password,
      process.env.CRYPTO_JS_SECRET_KEY
    );
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
    if (!user) {
      return res.status(401).json("Wrong password or email");
    } else if (originalPassword !== req.body.password) {
      return res.status(401).json("Wrong password or email");
    } else {
      accessToken = jwt.sign(
        {
          id: user._id,
          email: user.isAdmin,
        },
        process.env.JWT_SECRET_KEY
      );
      user.token = accessToken;
      const { password, ...info } = user._doc;
      return res.status(200).json({ ...info, accessToken });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
