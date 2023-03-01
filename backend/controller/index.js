const jwt = require("jsonwebtoken");
require("dotenv").config();
const { postData, getData } = require("../model");

const postController = async (req, res) => {
  const user = await getData(req.body.email);
  console.log("available: ", user);
  if (!user) {
    const result = await postData(req.body);
    res.send({ result, status: 200 });
  } else {
    res.send({ message: "Email already registered", status: 400 });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  console.log("login user: ", req.body);
  if (!(email && password)) {
    res.send({ message: "email and password required", login: false });
    return;
  }
  const result = await getData(email);

  console.log("RESULT: ", result);
  if (!result || result.password !== password) {
    res.send({ message: "credential not matched", login: false });
    return;
  }

  const token = jwt.sign(
    { id: result._id, email: result.email },
    process.env.SECRET_KEY
  );
  console.log("token: ", token);
  res.send({ token, login: true });
};

module.exports = { postController, loginController };
