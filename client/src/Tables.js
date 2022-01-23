import React, { useState, useEffect } from "react";
import Base from "./Base";
import "./styles.css";
import { Card } from "react-bootstrap";

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import axios from "axios";

const Tables = () => {
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  console.log("User: ", user);

  let shouldReload = isAuthenticated;
  const [tables, setTables] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`http://localhost:8000/tables/${user.nickname}`)
      .then((res) => setTables(res.data))
      .catch((err) => console.log("Not work", err));
  };
  useEffect(() => {
    if (shouldReload) {
      fetchData();
      shouldReload = false;
    }
  }, [shouldReload]);

  return (
    <Base>
      {isAuthenticated ? (
        <div>
          <p>Hey {user.nickname}, You're logged in! Tables show here</p>
          <Link to="/add">
            <button className="btn btn-primary">Add Table</button>
          </Link>
          <br></br>
          <h1>{tables.length}</h1>
          {tables.length > 0
            ? tables.map((element) => (
                <Card key={element._id}>
                  <Card.Body>
                    <Card.Title className="mb-2 text-muted">
                      {element.tableName}
                    </Card.Title>
                  </Card.Body>
                </Card>
              ))
            : "No tables yet"}
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
