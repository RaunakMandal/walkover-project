import React, { useState } from "react";
import Base from "./Base";
import { useAuth0 } from "@auth0/auth0-react";
import "axios";
import axios from "axios";
import "./styles.css"

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
        <div id="div1" className="row g-3 align-items-center">
          <div  id="div2"  className="col-auto">
            <label id ="tn" className="col-form-label">Table Name</label>
          </div>
          <div  id="div3" className="col-auto">
            <input id = "text1" type="text" id="tablename" className="form-control"></input>
          </div>
        </div>
        {inputList.map((element, index) => {
          return (
            <div  id="div4" className="main" key={index}>
              <div  id="div5" className="row g-3 align-items-center">
                <div  id="div6" className="col-sm-4">
                  <input id = "text2"
                    name="name"
                    placeholder="Enter Field Name"
                    value={element.name}
                    onChange={(e) => handleInputChange(e, index)}
                  />
                </div>
                <div  id="div7" className="col-sm-4">
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
                <div  id="div8" className="col-sm-4">
                  {index ? (
                    <button
                      type="button"
                      id="rmbtn"className="button remove"
                      onClick={() => handleRemoveClick(index)}
                    >
                      Remove
                    </button>
                  ) : null}
                  <button
            id = "bttn1"
            type="button"
            onClick={() => handleAddClick()}
          >
            Add
          </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="button-section">
          
          <button  id = "bttn3" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Base>
  );
};

export default AddTable;
