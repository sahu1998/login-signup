const mongoose = require("mongoose");
require("../connectDB");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("user", userSchema);

const postData = async (user) => {
  let result = await userModel.create(user);
  result = result.toObject();
  delete result.password;
  delete result._id;
  return result;
};

const getData = async (user) => {
  const result = await userModel.findOne({ email: user });
  return result;
};

module.exports = { postData, getData };
