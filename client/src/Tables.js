import React, { useEffect } from "react";
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
          <Link to="/add">
            <button className="btn btn-primary">Add Table</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>
            Please{" "}
            <Link to="/add">
              <button className="btn btn-primary">Login</button>
            </Link>{" "}
            to add a table
          </p>
        </div>
      )}
    </Base>
  );
};

export default Tables;
