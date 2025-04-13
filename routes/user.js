const express = require("express");
const router = express.Router();
const User = require("../model/user.js");
const passport = require("passport");
const { saveRedirecturl } = require("../middleware.js");
const userController = require("../controllers/users.js");

// router.route
router
  .route("/signup")
  .get(userController.signupForm)
  .post(userController.signup);

router
  .route("/login")
  .get(userController.loginForm)
  .post(
    saveRedirecturl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userController.login
  );

router.get("/logout", userController.logout);

module.exports = router;
