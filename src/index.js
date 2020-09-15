import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.render(
  <Auth0Provider
    domain="iuriikogan.eu.auth0.com"
    clientId="S2Yr3MCb7dwBk9u6vTktDkqtvW16BP1q"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
