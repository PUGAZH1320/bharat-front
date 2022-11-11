import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    if (inputs.username === "admin" && inputs.password === "admin") {
      navigate("/showdata")
    }
    else 
    {
      alert ("Incorrect Username or Password")
    }
  }

  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <form>
            <h1 className="title">Admin Login </h1>
            <div>
              <label className="text">Username* :</label>

              <input
                type="text"
                name="username"
                className="inputsize"
                placeholder="Username"
                onChange={handlechange}
              />
            </div>
            <div>
              <label className="text">Password* :</label>
              <input
                type="password"
                className="inputsize"
                name="password"
                placeholder="Password"
                onChange={handlechange}
              />
            </div>
            <div>
              <button
                className="clrbutton message"
                onClick={handleSubmit}
              >
                Login
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

export default Adminlogin;
