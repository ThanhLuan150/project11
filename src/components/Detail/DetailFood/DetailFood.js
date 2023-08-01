import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Slider from 'react-slick';
import DetailFoodss from "./DetailFoodss";
import DescripbeFood from "./DescribeFood";
const DetailFood = ()=>{ 
  
    
    return(
        <>
        <Header/>
        <div className="pt-[100px]">
            <div className="bg-[#f5f5f5] py-3 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="" >Món ăn</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="" >Mì xào bò</a></span>
            </div>
        </div>
        <div className="xl:px-[100px] px-[10px] " >
          <DetailFoodss/>
          <DescripbeFood/>
        </div>
        <Footer/>
        </>
    )
}
export default DetailFood;