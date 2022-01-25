import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Base from "./Base";
import Table from "react-bootstrap/Table";

const TableView = (props) => {
  const _id = props.match.params.id;
  const [table, setTable] = useState({});
  const getTable = async () => {
    await axios
      .get(`https://walkover-tableapp.herokuapp.com/api/table/${_id}`)
      .then((res) => setTable(res.data))
      .catch((err) => console.log("Not work", err));
  };

  let row = [];
  const pushToStr = (e) => {
    console.log(e.target.value);
    row.push(e.target.value);
  };

  useEffect(() => {
    getTable();
  }, []);

  console.log(table.fields?.length);
  const deleteTable = async () => {
    const res = await axios.delete(
      `https://walkover-tableapp.herokuapp.com/api/delete/${_id}`
    );
    console.log(res.status);
    if (res.status == 200) {
      return <Redirect to="/" />;
    }
  };

  const addToRow = async () => {
    console.log(row);
    await axios
      .post(`https://walkover-tableapp.herokuapp.com/api/addRow/${_id}`, {
        row,
      })
      .then((res) => console.log(res), window.location.reload())
      .catch();
  };

  console.log(table.rows);

  return (
    <Base>
      <h1>TableView</h1>
      {table ? (
        <div>
          <p>Table Name: {table.tableName}</p>
          <p>Created by: {table.userID}</p>
          <button className="btn btn-danger" onClick={deleteTable}>
            Delete
          </button>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                {table.fields?.map((item, index) => (
                  <th key={index}>{item.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {table.rows?.map((item, index) => (
                <tr>
                  {item.row.map((item, index) => (
                    <td key={index}>{item}</td>
                  ))}
                </tr>
              ))}
              {table.fields?.map((item, index) => (
                <td key={item._id}>
                  <input
                    type={item.type}
                    onBlur={(e) => {
                      pushToStr(e);
                    }}
                  ></input>
                </td>
              ))}
            </tbody>
            <button className="btn btn-success" onClick={addToRow}>
              Add
            </button>
          </Table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Base>
  );
};

export default TableView;
