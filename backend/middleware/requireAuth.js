const jwt = require("jsonwebtoken");
const JWT_KEY = "NEW_SESSION";
const requireAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ success: false, content: "Unauthorized" });
  }
  try {
    jwt.verify(authorization, JWT_KEY);
    next();
  } catch (err) {
    return res.status(401).json({ success: false, content: "Unauthorized" });
  }
};
module.exports = requireAuth;
