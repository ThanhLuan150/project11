
import Homepage from "./components/Body/Homepages/Homepage";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Body/Login/Login";
import Register from "./components/Body/Register/Register";
import Aboutus from "./components/Body/Homepages/Menu/About us";
import Dichvu from "./components/Body/Homepages/Menu/Dichvu";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Aboutus" element={<Aboutus />} />
    <Route path="/Service" element={<Dichvu />} />
  </Routes>    
  
  );
}

export default App;
