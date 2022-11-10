import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Userform = () => {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/userform", {
        firstname: inputs.firstname,
        lastname: inputs.lastname,
        empid: inputs.empid,
        html: inputs.html,
        css: inputs.css,
        js: inputs.js,
        reactjs: inputs.reactjs,
        nodejs: inputs.nodejs,
        sql: inputs.sql,
      })
      .then(() => {
        console.log("Success - user data inserted");
      });
    console.log(inputs);
  };

  return (
    <>
      <div className="containerform">
        <div className="app-wrapper">
          <form>
            <h1 className="title"> Skillset Form</h1>
            <label>Firstname :</label>
            <input
              type="text"
              className="inputsize"
              name="firstname"
              placeholder="Please enter Firstname"
              onChange={handlechange}
            />
            <br></br>
            <label>Lastname :</label>
            <input
              type="text"
              className="inputsize"
              name="lastname"
              placeholder="Please enter Lastname"
              onChange={handlechange}
            />
            <br></br>
            <label>Empolyee ID :</label>
            <input
              type="number"
              className="inputsize"
              name="empid"
              placeholder="Please enter ID"
              onChange={handlechange}
            />
            <br></br>
            <h3>Skills :</h3>
            <p>Please give the Ratings of your skills</p>
            <div className="inputsize">
              <b>HTML :</b>
              <input
                type="radio"
                id="1"
                name="html"
                value="1"
                onChange={handlechange}
              />
              <label>1</label>
              <input
                type="radio"
                id="2"
                name="html"
                value="2"
                onChange={handlechange}
              />
              <label>2</label>
              <input
                type="radio"
                id="3"
                name="html"
                value="3"
                onChange={handlechange}
              />
              <label>3</label>
              <input
                type="radio"
                id="4"
                name="html"
                value="4"
                onChange={handlechange}
              />
              <label>4</label>
              <input
                type="radio"
                id="5"
                name="html"
                value="5"
                onChange={handlechange}
              />
              <label>5</label>
              <br />
            </div>
            <div className="inputsize">
              <b>CSS :</b>
              <input
                type="radio"
                id="2"
                name="css"
                value="1"
                onChange={handlechange}
              />
              <label>1</label>
              <input
                type="radio"
                id="2"
                name="css"
                value="2"
                onChange={handlechange}
              />
              <label>2</label>
              <input
                type="radio"
                id="2"
                name="css"
                value="3"
                onChange={handlechange}
              />
              <label>3</label>
              <input
                type="radio"
                id="2"
                name="css"
                value="4"
                onChange={handlechange}
              />
              <label>4</label>
              <input
                type="radio"
                id="2"
                name="css"
                value="5"
                onChange={handlechange}
              />
              <label>5</label>
              <br />
            </div>
            <div className="inputsize">
              <b>JavaScript :</b>
              <input
                type="radio"
                id="3"
                name="js"
                value="1"
                onChange={handlechange}
              />
              <label>1</label>
              <input
                type="radio"
                id="3"
                name="js"
                value="2"
                onChange={handlechange}
              />
              <label>2</label>
              <input
                type="radio"
                id="3"
                name="js"
                value="3"
                onChange={handlechange}
              />
              <label>3</label>
              <input
                type="radio"
                id="3"
                name="js"
                value="4"
                onChange={handlechange}
              />
              <label>4</label>
              <input
                type="radio"
                id="3"
                name="js"
                value="5"
                onChange={handlechange}
              />
              <label>5</label>
              <br />
            </div>
            <div className="inputsize">
              <b>React JS :</b>
              <input
                type="radio"
                id="4"
                name="reactjs"
                value="1"
                onChange={handlechange}
              />
              <label>1</label>
              <input
                type="radio"
                id="4"
                name="reactjs"
                value="2"
                onChange={handlechange}
              />
              <label>2</label>
              <input
                type="radio"
                id="4"
                name="reactjs"
                value="3"
                onChange={handlechange}
              />
              <label>3</label>
              <input
                type="radio"
                id="4"
                name="reactjs"
                value="4"
                onChange={handlechange}
              />
              <label>4</label>
              <input
                type="radio"
                id="4"
                name="reactjs"
                value="5"
                onChange={handlechange}
              />
              <label>5</label>
              <br />
            </div>
            <div className="inputsize">
              <b>Node JS :</b>
              <input
                type="radio"
                id="5"
                name="nodejs"
                value="1"
                onChange={handlechange}
              />
              <label>1</label>
              <input
                type="radio"
                id="5"
                name="nodejs"
                value="2"
                onChange={handlechange}
              />
              <label>2</label>
              <input
                type="radio"
                id="5"
                name="nodejs"
                value="3"
                onChange={handlechange}
              />
              <label>3</label>
              <input
                type="radio"
                id="5"
                name="nodejs"
                value="4"
                onChange={handlechange}
              />
              <label>4</label>
              <input
                type="radio"
                id="5"
                name="nodejs"
                value="5"
                onChange={handlechange}
              />
              <label>5</label>
              <br />
            </div>
            <div className="inputsize">
              <b>SQL :</b>
              <input
                type="radio"
                id="6"
                name="sql"
                value="1"
                onChange={handlechange}
              />
              <label>1</label>
              <input
                type="radio"
                id="6"
                name="sql"
                value="2"
                onChange={handlechange}
              />
              <label>2</label>
              <input
                type="radio"
                id="6"
                name="sql"
                value="3"
                onChange={handlechange}
              />
              <label>3</label>
              <input
                type="radio"
                id="6"
                name="sql"
                value="4"
                onChange={handlechange}
              />
              <label>4</label>
              <input
                type="radio"
                id="6"
                name="sql"
                value="5"
                onChange={handlechange}
              />
              <label>5</label>
              <br />
            </div>

            <button className="clrbutton message" onClick={handleSubmit}>
              {" "}
              Submit
            </button>
            <button
              className="clrbutton message"
              onClick={() => navigate("/userlogin")}
            >
              {" "}
              Back
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Userform;
