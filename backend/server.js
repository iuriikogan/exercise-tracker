const express = require("express");

const mongoose = require("mongoose");
const app = express();

const cors = require("cors");
//middleware

app.use(cors());
app.use(express.json());
require("dotenv").config();

//environment

const port = process.env.PORT || 5000;

//mongoose establish connection

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

const exercisesRouter = require("./routes/exercises");
const usersRouter = require("./routes/users");

app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);


app.listen(port, () => {
  console.log(`server is up and running on port: ${port}`);
});
