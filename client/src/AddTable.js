import React, { useState } from "react";
import Base from "./Base";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import "./styles.css";
import Switch from "react-switch";
import { Redirect } from "react-router-dom";

const AddTable = () => {
  const { isAuthenticated, user } = useAuth0();
  const [tableN, setTableName] = useState("");
  const [inputList, setInputList] = useState([
    { name: "", type: "", primary: false },
  ]);

  const handleName = (e) => {
    setTableName(e.target.value);
  };
  const handleSwitch = (checked, index) => {
    console.log(checked);
    for (let i = 0; i < inputList.length; i++) {
      if (checked && inputList[i].primary) {
        alert("Only 1 primary key allowed");
        return;
      }
    }
    let newList = [...inputList];
    newList[index].primary = checked;
    setInputList(newList);
  };
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    for (let i = 0; i < inputList.length; i++) {
      if (inputList[i].name === "" || inputList[i].type === "") {
        alert("Fill all fields then add new field");
        return;
      }
    }
    setInputList([...inputList, { name: "", type: "", primary: false }]);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    console.log(tableN);
    if (tableN === "") {
      alert("Please enter a table name");
    } else if (inputList.length === 0) {
      alert("Please enter all details");
    } else {
      isAuthenticated
        ? await axios
            .post("https://walkover-tableapp.herokuapp.com/api/addTable", {
              tableName: tableN,
              userID: user.nickname,
              fields: inputList,
            })
            .then((res) => {
              console.log(res);
              setInputList([{ name: "", type: "", primary: false }]);
              document.getElementById("mainForm").reset();
            })
            .catch((err) => {
              console.log(err);
            })
        : alert("Not logged in");
    }
  };

  return (
    <Base>
      {isAuthenticated ? (
        <form onSubmit={handleSubmit} id="mainForm">
          <div className="row align-items-center">
            <div className="col-auto">
              <h1 className="col-form-label">Table Name</h1>
            </div>
            <div className="col-auto">
              <input
                placeholder="Enter Table Name"
                type="text"
                className="form-control"
                onChange={(e) => handleName(e)}
              ></input>
            </div>
          </div>
          {inputList.map((element, index) => {
            return (
              <div className="container" key={index}>
                <div className="row align-items-center">
                  <div className="col">
                    <input
                      name="name"
                      placeholder="Enter Field Name"
                      value={element.name}
                      onChange={(e) => handleInputChange(e, index)}
                    />
                  </div>
                  <div className="col">
                    <select
                      name="type"
                      value={element.type}
                      onChange={(e) => handleInputChange(e, index)}
                    >
                      <option value="">Select Type</option>
                      <option value="String">String</option>
                      <option value="Number">Number</option>
                      <option value="Boolean">Boolean</option>
                      <option value="Email">Email</option>
                      <option value="DateTime">DateTime</option>
                    </select>
                  </div>
                  <div className="col">
                    <label>
                      <div className="col align-items-center">
                        <span>Primary Key?</span>
                        <Switch
                          name="primary"
                          value={element.primary}
                          checked={element.primary}
                          onChange={(e) => handleSwitch(e, index)}
                        />
                      </div>
                    </label>
                  </div>
                  <div className="col">
                    {index ? (
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleRemoveClick(index)}
                      >
                        Remove
                      </button>
                    ) : null}
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => handleAddClick()}
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="col justify-contents-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      ) : (
        <Redirect to="/" />
      )}
    </Base>
  );
};

export default AddTable;
