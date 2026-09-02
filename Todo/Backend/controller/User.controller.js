const { User } = require("../model/user.model");
require("dotenv").config({ path: ".env.production" });
const jwt = require("jsonwebtoken");

const bycrypt = require("bcrypt");

const login = async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.find({ email: req.body.email });

    if (user.length > 0) {
      if (req.body) {
        bycrypt.compare(req.body.password, user[0].password, (err, result) => {
          if (err) {
            res.send({ msg: "Error comparing passwords", error: err.message });
          } else {
            if (result) {
              // token generate
              const token = jwt.sign({ userId: user[0]._id }, process.env.PrivateKey, {
                expiresIn: "1h",
              });
              res.send({ msg: "Login successful", userData: user[0], token });
            } else {
              res.send({ msg: "Invalid credentials" });
            }
          }
        });
        /*    const user = await User.findOne(req.body);
     res.send({ msg: "user find",userData:user }); */
      } else {
        res.send({ msg: "Please provide user details" });
      }
    } else {
      res.send({ msg: "User not found" });
    }
  } catch (error) {
    res.send({ msg: "Error creating user", error: error.message });
  }
};

const signup = async (req, res) => {
  try {
    if (req.body) {
      bycrypt.hash(
        req.body.password,
        parseInt(process.env.saltRounds),
        async (err, hash) => {
          if (err) {
            res.send({ msg: "Error hashing password", error: err.message });
          } else {
            req.body.password = hash;
            await User.create(req.body);
            res.send({ msg: "User created successfully" });
          }
        },
      );
    } else {
      res.send({ msg: "Please provide user details" });
    }
  } catch (error) {
    res.send({ msg: "Error creating user", error: error.message });
  }
};

module.exports = { login, signup };
