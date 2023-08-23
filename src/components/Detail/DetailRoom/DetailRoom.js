import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import DetailBooking from "./DetailBooking";
import Descripbe from "./Describe";
import Roomsimilartothebestroom from "./Roomsimilartothebestroom";
const DetailRoom = ()=>{ 
  
    return(
        <>
        <Header/>
        <div className="xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px] md:pt-[65px] pt-[60px]" >
          <DetailBooking />
          <Descripbe/>
          <Roomsimilartothebestroom/>
        </div>
        <Footer/>
        </>
    )
}
export default DetailRoom;