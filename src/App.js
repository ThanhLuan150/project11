
import Homepage from "./components/Body/Homepages/Homepage";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Body/Login/Login";
import Register from "./components/Body/Register/Register";
import Aboutus from "./components/Body/Homepages/Menu/About us";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Aboutus" element={<Aboutus />} />
  </Routes>    
  
  );
}

export default App;
