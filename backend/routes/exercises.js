const router = require("express").Router();
let Exercise = require("../models/exercise.model.js");
//get all exercises
router.get("/", (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("error: " + err));
});
//add an exercise

router.route("/add").post((res, req) => {
  //parse req.body
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);
  //create new exercise object
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });
  //save newExercise object
  newExercise
    .save()
    .then(() => res.json("Exercise Added!"))
    .catch(err => res.status(400).json("error: " + err));
});

module.exports = router;
