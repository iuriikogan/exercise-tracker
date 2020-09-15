import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="btn btn-sm btn-outline-secondary" onClick={() => logout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
