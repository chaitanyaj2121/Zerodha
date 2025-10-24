const User = require("../model/UserModel");
const { createSecretToken } = require("../utils/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username, createdAt } = req.body;

    // 1️⃣ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists", success: false });
    }

    // 2️⃣ Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // 3️⃣ Create new user
    const user = await User.create({
      email,
      password: hashedPassword,
      username,
      createdAt,
    });

    // 4️⃣ Create JWT token
    const token = createSecretToken(user._id);

    // 5️⃣ Send token in cookie (secure way)
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true, // prevents XSS attacks
      sameSite: "strict", // optional but good
    });

    // 6️⃣ Send success response
    res.json({
      message: "User signed up successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "Incorrect password or email" });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({ message: "Incorrect password or email" });
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res
      .status(201)
      .json({ message: "User logged in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
};
