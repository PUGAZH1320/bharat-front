import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Userlogin = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  const [users, setUsers] = useState([]);

  const handlechange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);

    axios.get("http://localhost:3001/userlogin", {}).then((response) => {
      setUsers(response.data);
      console.log(response.data);
      console.log(users);
      const username = users.map((user) => user.username);
      console.log(username);
      const password = users.map((user) => user.password);
      console.log(password);

      for (var i = 0; i < username.length; i++) {
        console.log(username[i]);
        console.log(password[i]);

        if (
          inputs.username === username[i] &&
          inputs.password === password[i]
        ) {
          navigate("/userform");
        }
      }
    });
  };

  return (
    <>
      <div className="container">
        <div className="app-wrapper">
          <form>
            <h1 className="title">User Login </h1>
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

export default Userlogin;
