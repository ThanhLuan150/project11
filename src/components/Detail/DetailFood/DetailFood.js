import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import MaybeyoulikeRelatedproducts from "../DetailFood/MaybeyoulikeRelatedproducts"
import DetailFoodss from "./DetailFoodss";
import DescripbeFood from "./DescribeFood";
const DetailFood = ()=>{ 
  
    
    return(
        <>
        <Header/>
        <div className="md:pt-[65px] pt-[60px]">
            <div className="bg-[#f5f5f5] lg:py-4 lg:pt-6 py-3 pt-2 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono hover:text-[#cd9a2b] transition-all duration-500 "><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#333] text-[14px] font-mono hover:text-[#cd9a2b] transition-all duration-500 "><a href="/" >Phòng đơn</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="" >Mì xào bò</a></span>
            </div>
        </div>
        <div className="xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px]" >
          <DetailFoodss/>
          <DescripbeFood/>
          <MaybeyoulikeRelatedproducts/>
        </div>
        <Footer/>
        </>
    )
}
export default DetailFood;