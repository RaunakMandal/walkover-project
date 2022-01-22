import React, { useState } from "react";
import Base from "./Base";
import { useAuth0 } from "@auth0/auth0-react";
import "axios";
import axios from "axios";

const AddTable = () => {
  const { isAuthenticated, user } = useAuth0();
  const [inputList, setInputList] = useState([{ name: "", type: "" }]);

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
    setInputList([...inputList, { name: "", type: "" }]);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputList));
    isAuthenticated
      ? await axios
          .post("http://localhost:8000/addTable", {
            tableName: "Test",
            userID: user.nickname,
            fields: inputList,
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
      : alert("Not logged in");
  };

  return (
    <Base>
      <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label className="col-form-label">Table Name</label>
          </div>
          <div className="col-auto">
            <input type="text" id="tablename" className="form-control"></input>
          </div>
        </div>
        {inputList.map((element, index) => {
          return (
            <div key={index}>
              <div className="row g-3 align-items-center">
                <div className="col-sm-4">
                  <input
                    name="name"
                    placeholder="Enter Field Name"
                    value={element.name}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </div>
                <div className="col-sm-4">
                  <select
                    name="type"
                    value={element.type}
                    onChange={(e) => handleInputChange(e, index)}
                  >
                    <option defaultChecked value="none">
                      Select Data Type
                    </option>
                    <option value="String">String</option>
                    <option value="Number">Number</option>
                    <option value="Boolean">Boolean</option>
                    <option value="Email">Email</option>
                    <option value="DateTime">DateTime</option>
                  </select>
                </div>
                <div className="col-sm-4">
                  {index ? (
                    <button
                      type="button"
                      className="button remove"
                      onClick={() => handleRemoveClick(index)}
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
              </div>
            </div>
          );
        })}
        <div className="button-section">
          <button
            className="button add"
            type="button"
            onClick={() => handleAddClick()}
          >
            Add
          </button>
          <button className="button submit" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Base>
  );
};

export default AddTable;
