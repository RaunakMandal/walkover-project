import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Menu = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("Auth Menu", isAuthenticated);
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Tables
          </Link>
        </li>
        {isAuthenticated ? (
          <li className="nav-item">
            <Link className="nav-link" to="/logout" onClick={logout}>
              Logout
            </Link>
          </li>
        ) : (
          <li className="nav-item">
            <Link className="nav-link" to="/login" onClick={loginWithRedirect}>
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
