import React, { useState, useEffect } from "react";
import Base from "./Base";
import "./styles.css";

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Tables = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  console.log("User: ", user);

  const [tables, setTables] = useState([]);

  const fetchData = async () => {
    axios
      .get("http://localhost:8000/tables")
      .then((res) => setTables(res.data))
      .catch((err) => console.log("Not work", err));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Base>
      {isAuthenticated ? (
        <div>
          <p>Hey {user.nickname}, You're logged in! Tables show here</p>
          <Link to="/add">
            <button className="btn btn-primary">Add Table</button>
          </Link>
          <br></br>
          {tables.length > 0
            ? tables.map((element) => (
                // <p key={element.id}>{element._id}</p>

                <div className="card" style="width: 18rem;">
                  {/* <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Card subtitle
                    </h6>
                  </div> */}
                </div>
              ))
            : `No tables yet and ${tables.length}`}
        </div>
      ) : (
        <div>
          <p>
            Please{" "}
            <Link to="/" onClick={loginWithRedirect}>
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
