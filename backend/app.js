const express = require("express");
const applayRoutesOnProducts = require("./routes/products");
const applayRoutesOnCollections = require("./routes/collections");
const app = express();
const cors = require("cors");
const helmet = require("helmet");
app.use(express.static("images"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(cors());
let port = 8080;
applayRoutesOnProducts(app);
applayRoutesOnCollections(app);
app.listen(port, () => {
  console.log("[+] Server is up and running");
});
