import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <div>
            <div className="title">
              <h1>Home Page</h1>
            </div>
            <button className="clrbutton" onClick={() => navigate("userlogin")}>
              User Login
            </button>
            <br></br>
            <button
              className="clrbutton"
              onClick={() => navigate("adminlogin")}
            >
              Admin Login
            </button>
            <br></br>
            <button className="clrbutton" onClick={() => navigate("regform")}>
              New User
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
