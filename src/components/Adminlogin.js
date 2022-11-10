import React from "react";
import { useNavigate } from "react-router-dom";

const Adminlogin = () => {
  const navigate = useNavigate();

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
              />
            </div>
            <div>
              <label className="text">Password* :</label>
              <input
                type="password"
                className="inputsize"
                name="password"
                placeholder="Password"
              />
            </div>
            <div>
              <button
                className="clrbutton message"
                onClick={() => navigate("/showdata")}
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
