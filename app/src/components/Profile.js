import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  // take user and isAuthenticated (Boolean) from useAuth hook

  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { userMetadata, setUserMetadata } = useState(null);

  useEffect(() => {
      const getUserMetadata = async () => {
      const domain = process.env.REACT_APP_AUTH0_DOMAIN;

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user"
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  });

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
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
      </div>
    )
  );
};

export default Profile;
