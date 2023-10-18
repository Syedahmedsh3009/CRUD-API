const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(10);
const jwt = require("jsonwebtoken");
require("dotenv").config();
module.exports.createUser = async (req, res, next) => {
  const { name, email, password, number } = req.body;
  try {
    if (!name | !email | !password | !number) {
      return res.status(202).json({ msg: "fill the details correctly" });
    }
    const checkEmail = await User.findOne({ email });
    if (checkEmail) {
      return res.status(202).json({ msg: "Email already exists" });
    }
    const hashPassword = bcrypt.hashSync(password, salt);
    const user = await User.create({ ...req.body, password: hashPassword });
    return res.json(user);
  } catch (e) {
    next(e);
  }
};

module.exports.loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email | !password) {
    return res.json("email/password is missing");
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.json({ msg: "User doesn't exists" });
  }
  let comparedPassword = bcrypt.compareSync(password, user.password);
  if (!comparedPassword) {
    return res.json({ msg: "Invalid credentials" });
  }
  let token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY_DURATION,
  });
  return res.json({ user, token });
};
