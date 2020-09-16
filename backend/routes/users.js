const router = require("express").Router();
const User = require("../../models/user.model");
const bcrypt = require("bcryptjs");
require("dotenv");
const jwt = require("jsonwebtoken");

// @ Route    api/users/
// @ desc     Register new user
// @ access   Public

router.route("/").post((req, res) => {
  const { username, email, password } = req.body;

  // simple validation
  if (!username || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  //check if user email exists

  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "User already exists" });
  });

  //save newUser class instance

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

      // save new user
      newUser
        .save()
        .then(user => {
          jwt.sign(
            { id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: 36000 },
            (err, token) => {
              if (err) throw err;
              res.json({
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  token
                }
              });
            }
          );
        })
        .catch(err => res.status(500).json("error: " + err));
    });
  });
});

//@Route /api/users/
//@desc  get all users
//@access PUBLIC
router.route("/").get((req, res) => {
  User.find()
    .then(User => res.json(User))
    .catch(err => `error: ${err}`);
});

module.exports = router;
