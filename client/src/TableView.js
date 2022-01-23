import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Base from "./Base";
const TableView = (props) => {
  const _id = props.match.params.id;
  const [table, setTable] = useState({});
  let reload = true;
  const getTable = async () => {
    await axios
      .get(`http://localhost:8000/table/${_id}`)
      .then((res) => setTable(res.data))
      .catch((err) => console.log("Not work", err));
  };

  useEffect(() => {
    if (reload) {
      getTable();
      console.log(table._id);
      reload = false;
    }
  }, [reload]);

  const deleteTable = async () => {
    await axios
      .delete(`http://localhost:8000/delete/${_id}`)
      .then((res) => <Redirect to="/tables" />)
      .catch((err) => console.log("Not work", err));
  };

  return (
    <Base>
      <div>
        <h1>TableView</h1>
        <p>Table Name: {table.tableName}</p>
        <p>Created by: {table.userID}</p>
        <button className="btn btn-danger" onClick={deleteTable}>
          Delete
        </button>
      </div>
    </Base>
  );
};

export default TableView;
