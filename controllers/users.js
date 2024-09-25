const User = require("../model/user.js");

// sign up form
module.exports.signupForm = (req, res) => {
  res.render("users/signup.ejs");
};

// sign up post data
module.exports.signup = async (req, res) => {
  try {
    let { username, email, password } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.logIn(registeredUser, (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
      req.flash("success", `Welcome to WANDER! ${newUser.username}`);
      res.redirect("/listings");
    });
  } catch (error) {
    req.flash("error", error.message);
    res.redirect("/signup");
  }
};

// login data
module.exports.loginForm = (req, res) => {
  res.render("users/login.ejs");
};

module.exports.login = async (req, res) => {
  req.flash("success", `Welcome back, ${req.user.username}!`);
  let redirectUrl = res.locals.redirectUrl || "/listings";
  res.redirect(redirectUrl);
};

module.exports.logout = (req, res) => {
  req.logout((err) => {
    if (err) {
      console.log(err);
      next(err);
    }
    req.flash("success", "You've been logged out!");
    res.redirect("/listings");
  });
};
