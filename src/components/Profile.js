import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  // take user and isAuthenticated (Boolean) from useAuth hook

  const { user, isAuthenticated } = useAuth0();

  // if authenticated display fields

  return (
    isAuthenticated && (
      <div className="container">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <img
          src={user.picture}
          alt={user.name}
          className="img-fluid img-thumbnail"
          style={{ height: "200px" }}
        />
      </div>
    )
  );
};

export default Profile;
