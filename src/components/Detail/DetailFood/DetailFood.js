import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import MaybeyoulikeRelatedproducts from "../DetailFood/MaybeyoulikeRelatedproducts"
import DetailFoodss from "./DetailFoodss";
import DescripbeFood from "./DescribeFood";

const DetailFood = ()=>{ 
   
    return(
        <>
        <Header/>
        <div className="xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px] md:pt-[65px] pt-[60px]"  >
          <DetailFoodss />
          <DescripbeFood />
          <MaybeyoulikeRelatedproducts/>
        </div>
        <Footer/>
        </>
    )
}
export default DetailFood;