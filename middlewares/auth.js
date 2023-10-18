const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (authorization) {
      const token = authorization.replace("Bearer ", "");
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findOne({ _id: decoded._id });
      if (!user) {
        return res.json("You are not logged in");
      } else {
        req.user = user;
        next();
      }
    } else {
      res.json({ msg: "You are not authenticated to access this route" });
    }
  } catch (e) {
    res.json({
      msg: "You are not authenticated to access this route",
      error: e,
    });
  }
};
