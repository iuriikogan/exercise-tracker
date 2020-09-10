const router = require("express").Router();
let User = require("../models/user.model");
//GET ALL USERS
router.get("/", (req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json("Error: " + err));
});
//ADD SINGLE USER
router.route("/add").post((req, res) => {
  //parse user object
  const username = req.body.username;
  const newUser = new User({ username });
  // save newUser object
  newUser
    .save()
    .then(() => res.json("user added"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
