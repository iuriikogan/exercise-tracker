const router = require("express").Router();
let Exercise = require("../models/exercise.model.js");
//get all exercises
router.get("/", (req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json("error: " + err));
});
//add an exercise

router.route("/add").post((req, res) => {
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

router.route("/:id").get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json(`error: ${err}`));
});

router.route("/:id").delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise Deleted"))
    .catch(err => res.status(400).json(`error: ${err}`));
});

router.route("/update/:id").post((req, res) => {
  Exercise.findByIdAndUpdate(req.params.id).then(exercise => {
    exercise.username = req.body.username;
    exercise.description = req.body.description;
    exercise.duration = Number(req.body.duration);
    exercise.date = Date.parse(req.body.date);

    exercise
      .save()
      .then(() => res.json("Exercise Updated"))
      .catch(err => res.status(400).json(`error: ${err}`));
  });
});

module.exports = router;
