const jwt = require("jsonwebtoken");

require("dotenv").config({
  path: ".env.production",
});

const Auth = (req, res, next) => {
  try {
    console.log("req.header", req.headers);
    if (!req.headers.token) {
      res.send({ msg: "Please login first" });
      return;
    }

    const token = req.headers.token?.split(" ")[1];
    console.log("token", token);

    jwt.verify(token, process.env.PrivateKey, (err, decode) => {
      if (err) {
        res.send({ msg: "something went wrong in token verification..." });
        return;
      }
      console.log("decode data",decode);  
      req.body.userData=decode;
      next();
    });
  } catch (err) {
    res.send({ msg: "something went wrong..." });
  }
};

module.exports = { Auth };
