import "./App.css";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Adminlogin from "./components/Adminlogin";
import Userlogin from "./components/Userlogin";
import Userform from "./components/Userform";
import Registerform from "./components/Registerform";
import Showdata from "./components/Showdata";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="adminlogin" element={<Adminlogin />} />
          <Route path="userlogin" element={<Userlogin />} />
          <Route path= "userform" element={<Userform />} />         
          <Route path= "regform" element={<Registerform />} />         
          <Route path= "showdata" element={<Showdata />} />         
        </Routes>
      </div>
    </>
  );
}

export default App;
