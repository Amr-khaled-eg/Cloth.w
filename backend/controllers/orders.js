const Orders = require("../models/orders");
const jwt = require("jsonwebtoken");
exports.postOrder = (req, res) => {
  const { authorization } = req.headers;
  let user = "guest user";
  if (authorization) {
    try {
      user = jwt.verify(authorization, "NEW_SESSION").id;
    } catch (err) {
      res.status(400).json({ success: false, content: "wrong token" });
    }
  }
  new Orders({
    user: user,
    ...req.body,
  }).save((err) => {
    if (err) {
      res
        .status(500)
        .json({ success: false, content: "can not save the order" });
    } else {
      res.status(200).json({ success: true, content: "order added" });
    }
  });
};
exports.getAllOrders = (req, res) => {
  Orders.find({}, (err, found) => {
    if (err || !found) {
      res.status(500).json({ success: false, content: "server error" });
    } else {
      res.status(200).json({ success: true, content: { orders: found } });
    }
  });
};
