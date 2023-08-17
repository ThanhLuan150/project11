
import Homepage from "./components/Body/Homepages/Homepage";
import {Routes, Route} from "react-router-dom";
import Login from "./components/Body/Login/Login";
import Register from "./components/Body/Register/Register";
import Aboutus from "./components/Body/Homepages/Menu/About us";
import Dichvu from "./components/Body/Homepages/Menu/Dichvu";
import Cake from "./components/Body/Homepages/Menu/ListCuisine/Cake";
import Food from "./components/Body/Homepages/Menu/ListCuisine/Food";
import Fruit from "./components/Body/Homepages/Menu/ListCuisine/Fruit";
import Single from "./components/Body/Homepages/Menu/ListRoom/Single";
import Double from "./components/Body/Homepages/Menu/ListRoom/Double";
import Vip from "./components/Body/Homepages/Menu/ListRoom/Vip";
import ListRoom from "./components/Body/Homepages/Menu/ListRoom/ListRoom";
import ListCuisine from "./components/Body/Homepages/Menu/ListCuisine/ListCuisine";
import DetailRoom from "./components/Detail/DetailRoom/DetailRoom";
import DetailFood from "./components/Detail/DetailFood/DetailFood";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";
import VerifyAccount from "./components/Body/VerifyAccount/VerifyAccount";


function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/Login" element={<Login />} />
    <Route path="/VerifyAccount" element={<VerifyAccount />} />
    <Route path="/Register" element={<Register />} />
    <Route path="/About-us" element={<Aboutus />} />
    <Route path="/Service" element={<Dichvu />} />
    <Route path="/Cake" element={<Cake />} />
    <Route path="/Food" element={<Food/>} />
    <Route path="/Fruit" element={<Fruit/>} />
    <Route path="/Single" element={<Single/>} />
    <Route path="/Double" element={<Double/>} />
    <Route path="/Vip" element={<Vip/>} />
    <Route path="/List-room" element={<ListRoom/>} />
    <Route path="/List-cuisine" element={<ListCuisine/>} />
    <Route path="/Detail-room" element={<DetailRoom/>} />
    <Route path="/Detail-food" element={<DetailFood/>} />
    <Route path="/Cart" element={<Cart/>}></Route>
    <Route path="/Checkout" element={<Checkout/>}></Route>
  </Routes>    
  
  );
}

export default App;
