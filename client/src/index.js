import React from "react";
import Routes from "./Routes";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="raunak-auth0.us.auth0.com"
    clientId="5XjEZJCieWGwrvAQ0T0UflYJpQ8OlzmQ"
    redirectUri={window.location.origin}
  >
    <Routes />
  </Auth0Provider>,
  document.getElementById("root")
);
