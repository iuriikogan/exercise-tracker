const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

// Post User Route
router.route("/").post((req, res) => {
  const { username, email, password } = req.body;

  // simple validation
  if (!username || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  // //check for existing user

  // User.findOne({ email }).then(User => {
  //   if (User) return res.status(400).json({ msg: "user exists already" });

  const newUser = new User({
    username,
    email,
    password
  });

  //create salt and hash
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(user => {
          res.json({
            user: {
              id: user.id,
              name: user.name,
              email: user.email
            }
          });
        })
        .catch(err => res.status(500).json("error: " + err));
    });
  });
});

// //ADD SINGLE USER
// router.route("/add").post((req, res) => {
//   //parse user object
//   const username = req.body.username;
//   const newUser = new User({ username });
//   // save newUser object
//   newUser
//     .save()
//     .then(() => res.json("user added"))
//     .catch(err => res.status(400).json("Error: " + err));
// });

module.exports = router;
