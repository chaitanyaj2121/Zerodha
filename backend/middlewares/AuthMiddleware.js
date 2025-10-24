const User = require("../model/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.json({ status: false, message: "No token provided" });
    }

    // ✅ Use promisified version instead of callback
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // ✅ Find user by the decoded ID
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.json({ status: false, message: "User not found" });
    }

    return res.json({
      status: true,
      user: user.username,
      userId: user._id,
    });
  } catch (error) {
    console.error("Token verification error:", error.message);

    // ✅ Handle specific JWT errors
    if (error.name === "JsonWebTokenError") {
      return res.json({ status: false, message: "Invalid token" });
    }
    if (error.name === "TokenExpiredError") {
      return res.json({ status: false, message: "Token expired" });
    }

    return res.json({ status: false, message: "Authentication failed" });
  }
};
