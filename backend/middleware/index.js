const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
  const token = req.headers.token || req.query.token || req.body.token;
  if (!token) {
    res.send({
      message: "Token Required",
      login: false,
      status: "error",
    });
    return;
  }
  const isVerified = jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      res.send({
        message: "Invalid Token",
        login: false,
        status: "error",
      });
    } else {
      req.authorized = {
        message: "Valid Token",
        login: true,
        status: "success",
        user,
      };
      next();
    }
  });
};

module.exports = { verifyUser };
