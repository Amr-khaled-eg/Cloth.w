const Users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_KEY = "NEW_SESSION";
const addUser = async (req, res) => {
  try {
    // first we need to check if the user's email already exists and we will do that like so
    const exists = await Users.exists({ email: req.body.email }).lean();
    if (exists)
      res
        .status(400)
        .json({ success: false, content: "The email is already taken" });
    // if we did not find the email then add it
    const { password, ...body } = req.body;
    const hashedPassword = await bcrypt.hash(password, 1);
    const newUser = await Users.create({
      ...body,
      password: hashedPassword,
      role: "user",
    }).lean();
    const token = jwt.sign({ id: newUser._id }, JWT_KEY, {
      expiresIn: "1 days",
    });
    res.status(200).json({ success: true, content: { token } });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, content: "server proplem" });
  }
};
exports.addUser = addUser;
