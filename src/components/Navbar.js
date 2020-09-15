import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./Login";
import LogoutButton from "./Logout";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Exercise Tracker
      </Link>
      <div className="navbar-collapse">
        <ul className="navbar-nav ">
          <li className="navbar-item">
            <Link to="/" className="nav-link">
              Exercises
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">
              Create Exercise Log
            </Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/user" className="nav-link">
              Create User
            </Link>
          </li> */}
          <LoginButton />
          <LogoutButton />
        </ul>
      </div>
    </nav>
  );
}
