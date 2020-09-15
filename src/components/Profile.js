import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  return (
    isAuthenticated && (
      <div className="container">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <img src={user.picture} alt={user.name} />
      </div>
    )
  );
};

export default Profile;
