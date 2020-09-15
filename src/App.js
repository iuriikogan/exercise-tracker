import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import CreateExercise from "./components/CreateExercise";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Switch>
          <Route path="/" exact={true} component={ExerciseList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
