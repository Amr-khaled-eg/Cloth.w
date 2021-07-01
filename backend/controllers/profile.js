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
const getProfile = async (req, res) => {
  // this function will get the id from the requireAuth middleware and search for the user and return the user
  const id = res.locals.payload.id;
  try {
    const profile = await Users.findOne({ _id: id }).lean();
    if (!profile) throw new Error("profile not found");
    res.status(200).json({ success: true, content: getNeededData(profile) });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, content: "server error" });
  }
};
exports.getProfile = getProfile;
