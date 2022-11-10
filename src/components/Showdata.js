import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Showdata = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getUsers = (e) => {
    e.preventDefault();
    axios.get("http://localhost:3001/getusers", {}).then((response) => {
      console.log(response);
      setUsers(response.data);
    });
  };

  return (
    <>
      <div>
        <button onClick={getUsers}>show data</button>
        {users.map((val, key) => {
          return (
            <>
              <div>Firstname:{val.firstname}</div>
              <div>Lastname:{val.lastname}</div>
              <div>Employee ID:{val.empid}</div>
              <div>HTML:{val.html}</div>
              <div>CSS:{val.css}</div>
              <div>JavaScript:{val.js}</div>
              <div>React Js:{val.reactjs}</div>
              <div>Node Js:{val.nodejs}</div>
              <div>SQL/PLSQL:{val.sqlskill}</div>
            </>
          );
        })}
        <button onClick={() => navigate("/adminlogin")}>Back</button>
      </div>
    </>
  );
};

export default Showdata;
