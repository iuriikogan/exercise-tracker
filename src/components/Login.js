import React from "react";
import { useAuth0 } from "auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <form className="form-inline">
      <button
        className="btn btn-sm btn-outline-secondary"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
    </form>
  );
};

export default LoginButton;
