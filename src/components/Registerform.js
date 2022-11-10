import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registerform = () => {
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
      .post("http://localhost:3001/login", {
        username: inputs.username,
        password: inputs.password,
      })
      .then(() => {
        console.log("Success - user data inserted");
      });
    console.log(inputs);
    alert ("User added successfully")
    window.location.reload(true);
  };
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <form>
            <h1 className="title">User Register </h1>
            <div className="text">
              <label>Username* :</label>
              <input
                type="text"
                className="inputsize"
                name="username"
                placeholder="Username"
                onChange={handlechange}
              />
              <br></br>
              <label>Password* :</label>
              <input
                type="password"
                className="inputsize"
                name="password"
                placeholder="Password"
                onChange={handlechange}
              />
            </div>
            <div>
              <button className="clrbutton message" onClick={handleSubmit}>
                Register
              </button>
            </div>
          </form>
          <button className="clrbutton message" onClick={() => navigate("/")}>
            Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Registerform;
