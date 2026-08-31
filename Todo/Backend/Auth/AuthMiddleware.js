const jwt = require("jsonwebtoken");

require("dotenv").config({
  path: ".env.production",
});

const Auth = (req, res, next) => {
  const token = req.headers.token?.split(" ")[1];
  console.log("token",typeof token);
  if (!token) {
    res.send({ msg: "Please login first" });
  }

  jwt.verify(token, process.env.PrivateKey, (err, decode) => {
    if (err) {
      res.send({msg:"something went wrong in token verification..."});
    }
    console.log(decode)
    next();
  });
};

module.exports = { Auth };
