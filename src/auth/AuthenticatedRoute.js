import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route } from "react-router-dom";

const AuthenticatedRoute = ({ component: Component, path, ...rest }) => {
  const { isAuthenticated } = useAuth0();
  return isAuthenticated ? (
    <Route path={path} render={props => <Component {...props} />} />
  ) : null;
};

export default AuthenticatedRoute;
  