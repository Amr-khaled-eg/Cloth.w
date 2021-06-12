const Users = require("../models/users");
// this will handle the post requests from the cart endpoint
exports.addToCart = (req, res) => {
  const id = res.locals.payload.id;
  Users.update({ _id: id }, { $push: { cart: req.body } }, (err, done) => {
    if (err) {
      res.status(500).json({ success: false, content: "server Error" });
    } else {
      res.status(200).json({ success: true, content: "Item Added" });
    }
  });
};
// this will handle the delete requests from the cart endpoint
exports.removeFromCart = (req, res) => {
  const id = res.locals.payload.id;
  Users.updateOne(
    { _id: id },
    { $pull: { cart: { name: req.body.name } } },
    (err, done) => {
      if (err) {
        res.status(500).json({ success: false, content: "server Error" });
      } else {
        res.status(200).json({ success: true, content: "Item removed" });
      }
    }
  );
};
// this will handle the get requests from the cart endpoint
exports.getCart = (req, res) => {
  const id = res.locals.payload.id;
  Users.findOne({ _id: id }, (err, found) => {
    if (err || !found) {
      res.status(500).json({ success: false, content: "server Error" });
    } else {
      res.status(200).json({ success: true, content: { cart: found.cart } });
    }
  });
};
exports.emptyCart = (req, res) => {
  const id = res.locals.payload.id;
  Users.updateOne({ _id: id }, { $set: { cart: [] } }, (err) => {
    if (err) {
      res.status(500).json({ success: false, content: "server Error" });
    } else {
      res.status(200).json({ success: true, content: "The Cart is empty" });
    }
  });
};
