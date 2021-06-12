const Users = require("../models/users");
const getNeededData = (data) => {
  let result = {};
  Object.keys(data).forEach((key) => {
    if (key === "password" || key === "_id" || key === "__v") {
      return;
    } else {
      result[key] = data[key];
    }
  });
  return result;
};
const getProfile = (req, res) => {
  const id = res.locals.payload.id;
  Users.findOne({ _id: id }, (err, found) => {
    if (err || !found) {
      console.log(err);
      res.status(500).json({ success: false, content: "server error" });
    } else {
      let result = getNeededData(found._doc);
      res.status(200).json({ success: true, content: result });
    }
  });
};
exports.getProfile = getProfile;
