import Header from "../../Header/Header";
import Banner from "./Banner";
import IntroduceHotel from "./IntroduceHotel";
import Room from "./Room/Room";
import Cuisine from "./Cuisine/Cuisine";
import Service from "./Information/Service";
import KnowledHotel from "./KnowlegeHotel";
import Footer from "../../Footer/Footer";
const Homepage = ()=>{ 
    return(
        
        <>
          <Header/>
          <Banner/>
          <IntroduceHotel/>
          <Room/>
          <Cuisine/>
          <Service/>
          <KnowledHotel/>
          <Footer/>
        </>
    )
}
export default Homepage ;