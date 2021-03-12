const router = require("express").Router();
let User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find({ email: req.query.email, password: req.query.password })
    .then((user) => {
      console.log(user);
      if (
        user[0].email === req.query.email &&
        user[0].password === req.query.password
      ) {
        res.json({ status: "Success", ...user[0]["_doc"] });
      } else {
        res.json({ status: "Failed" });
      }
    })
    .catch((err) => res.status(400).json(err));
});

router.route("/").post((req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const mobile = req.body.mobile;
  const email = req.body.email;
  const password = req.body.password;

  const newUser = new User({
    firstName,
    lastName,
    mobile,
    email,
    password,
  });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
