const Users = require("../models/users");
const incluedsAnObject = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], item);
    if (arr[i].name === item.name && item.size === arr[i].size) {
      return i;
    }
  }
  return -1;
};
// this will handle the post requests from the cart endpoint
exports.addToCart = (req, res) => {
  const id = res.locals.payload.id;
  Users.findOne({ _id: id }, (err, user) => {
    if (err || !user) {
      console.error(err);
      res.status(500).json({ success: false, content: "server Error" });
    } else {
      const itemIdx = incluedsAnObject(user.cart, {
        name: req.body.name,
        size: req.body.size,
      });
      if (itemIdx !== -1 && user.cart[itemIdx].size === req.body.size) {
        user.cart[itemIdx].quantity += 1;
      } else {
        user.cart.push(req.body);
      }

      user.save((err) => {
        if (err) {
          console.error(err);
        } else {
          res.status(200).json({ success: true, content: "Item added" });
        }
      });
    }
  });
};
// this will handle the delete requests from the cart endpoint
exports.removeFromCart = (req, res) => {
  const id = res.locals.payload.id;
  Users.updateOne(
    { _id: id },
    { $pull: { cart: { name: req.body.name, size: req.body.size } } },
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
