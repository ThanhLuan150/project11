
import Homepage from "./components/Body/Homepages/Homepage";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Body/Login/Login";
import Register from "./components/Body/Register/Register";
import Aboutus from "./components/Body/Homepages/Menu/About us";
import Dichvu from "./components/Body/Homepages/Menu/Dichvu";
import Cake from "./components/Body/Homepages/Menu/ListCuisine/Cake";
import Food from "./components/Body/Homepages/Menu/ListCuisine/Food";

function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/Aboutus" element={<Aboutus />} />
    <Route path="/Service" element={<Dichvu />} />
    <Route path="/Cake" element={<Cake />} />
    <Route path="/Food" element={<Food/>} />
  </Routes>    
  
  );
}

export default App;
