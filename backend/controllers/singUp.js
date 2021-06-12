const Users = require("../models/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_KEY = "NEW_SESSION";
const addUser = (req, res) => {
  // first we need to check if the user's email already exists and we will do that like so
  Users.exists({ email: req.body.email }, (err, found) => {
    if (err) {
      console.log(err);
      res.status(500).json({ success: false, content: "server proplem" });
    } else if (!found) {
      // if we did not find the email then add it
      bcrypt.hash(req.body.password, 1, (err, hash) => {
        if (err) {
          console.log(err);
          res.status(500).json({ success: false, content: "server proplem" });
        }
        new Users({
          name: req.body.name,
          password: hash,
          email: req.body.email,
          address: req.body.address,
          phone: req.body.phone,
          role: "user",
        }).save((err, found) => {
          if (err) {
            console.log(err);
            res.status(500).json({ success: false, content: "server proplem" });
          } else {
            const token = jwt.sign({ id: found._id }, JWT_KEY, {
              expiresIn: "1 days",
            });
            res.status(200).json({ success: true, content: { token } });
          }
        });
      });
    } else {
      // if the email already exists
      res
        .status(400)
        .json({ success: false, content: "The email is already taken" });
    }
  });
};
exports.addUser = addUser;
