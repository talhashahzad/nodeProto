const express = require("express");
const User = require("../Controller/userController");

const router = express.Router();

router.get("/signup-user", User.signupUser);
router.post("/signedup-user", User.signupUserComplete);

router.get("/signin-user", User.singinUser);
router.post("/signedin-user", User.singinUserComplete);

router.get("/signout", User.signout);

module.exports = router;
