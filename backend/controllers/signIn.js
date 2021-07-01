const Users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_KEY = "NEW_SESSION";
const checkUser = async (user) => {
  const userNode = await Users.findOne({ email: user.email });
  if (!userNode) {
    throw new Error("password or email is worng");
  }
  const result = await bcrypt.compare(user.password, userNode.password);
  if (result) {
    return userNode;
  } else {
    throw new Error("password or email is worng");
  }
};
const createSession = (id) => {
  return jwt.sign({ id }, JWT_KEY, { expiresIn: "1 days" });
};
const checkUserToken = (token) => {
  try {
    // return { success: true, content: { id: jwt.verify(token, JWT_KEY).id } };
    jwt.verify(token, JWT_KEY);
    return { success: true, content: "this user exists" };
  } catch (err) {
    return { success: false, content: err.message };
  }
};
const signUserIn = async (req, res) => {
  const { authorization } = req.headers;
  if (authorization) {
    res.status(200).json(checkUserToken(authorization));
  } else {
    try {
      // i will check if the user exists
      const user = await checkUser({
        email: req.body.email,
        password: req.body.password,
      });
      // and if it does i will create a new session and send it to the user
      res.status(200).json({
        success: true,
        content: { token: createSession(user._id) },
      });
    } catch (e) {
      console.log(e);
      res.status(400).json({ success: false, content: e.message });
    }
  }
};
exports.signUserIn = signUserIn;
