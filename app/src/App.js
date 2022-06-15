import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import CreateExercise from "./components/CreateExercise";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import Profile from "./components/Profile";
import AuthenticatedRoute from "./auth/AuthenticatedRoute";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Switch>
          <AuthenticatedRoute exact="true" path="/" component={ExerciseList} />
          <AuthenticatedRoute path="/edit/:id" component={EditExercise} />
          <AuthenticatedRoute path="/create" component={CreateExercise} />
          <AuthenticatedRoute path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
