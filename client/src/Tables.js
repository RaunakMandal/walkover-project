import React from "react";
import Base from "./Base";
import "./styles.css";

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Tables = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  console.log("User: ", user);
  return (
    <Base>
      {isAuthenticated ? (
        <div>
          <p>Hey {user.nickname}, You're logged in! Tables show here</p>
          <button>Add table</button>
        </div>
      ) : (
        <div>
          <p>
            Please{" "}
            <a href="/" onClick={loginWithRedirect}>
              login
            </a>{" "}
            to continue
          </p>
        </div>
      )}
    </Base>
  );
};

export default Tables;
