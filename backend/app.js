const express = require("express");
const mongoose = require("mongoose");
const applayRoutesOnProducts = require("./routes/products");
const applayRoutesOnCollections = require("./routes/collections");
const applayRoutesOnSignUp = require("./routes/signUp");
const applayRoutesOnSignIn = require("./routes/signIn");
const applayRoutesOnProfile = require("./routes/profile");
const applayRoutesOnCart = require("./routes/cart");
const applayRoutesOnOrders = require("./routes/orders");
const applayRoutesOnAdmin = require("./routes/admin");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
mongoose.connect("mongodb://localhost:27017/cloth", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.static("images"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());
let port = 8080;
applayRoutesOnProducts(app);
applayRoutesOnCollections(app);
applayRoutesOnSignUp(app);
applayRoutesOnSignIn(app);
applayRoutesOnProfile(app);
applayRoutesOnCart(app);
applayRoutesOnOrders(app);
applayRoutesOnAdmin(app);

app.listen(port, () => {
  console.log("[+] Server is up and running");
});
