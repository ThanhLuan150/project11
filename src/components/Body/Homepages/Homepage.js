import Header from "../../Header/Header";
import Banner from "./Banner";
import IntroduceHotel from "./IntroduceHotel";
import Room from "./Room/Room";
import Cuisine from "./Cuisine/Cuisine";
const Homepage = ()=>{ 
    return(
        
        <>
          <Header/>
          <Banner/>
          <IntroduceHotel/>
          <Room/>
          <Cuisine/>
        </>
    )
}
export default Homepage ;