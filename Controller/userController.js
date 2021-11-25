const User = require("../Model/userModel");
const bcrypt = require("bcrypt");

const passport = require("passport");

module.exports = {
  signupUser: async (req, res) => {
    res.render("signup");
  },
  signupUserComplete: async (req, res) => {
    console.log("in signup fnc");
    try {
      //generating secure password
      const securePass = await bcrypt.hash(req.body.password, 10);

      //pushing user to mongodb
      const user = new User({
        userName: req.body.userName,
        fullName: req.body.fullName,
        password: securePass,
      });
      user.save().then((data) => {
        console.log(data);
        res.render("signin");
      });
    } catch (error) {
      console.log(error);
    }
    // res.render("/");
  },

  singinUser: (req, res) => {
    res.render("signin");
  },
  singinUserComplete: (req, res) => {
    //auth logic
    console.log(req.body.email);
    console.log(req.body.password);
    res.render("home.ejs");
  },

  signout: (req, res) => {
    res.render("/signin-user");
  },
};
