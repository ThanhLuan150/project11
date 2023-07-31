import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const DetailRoom = ()=>{ 
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
    
    
    return(
        <>
        <Header/>
        <div className="pt-[100px]">
            <div className="bg-[#f5f5f5] py-3 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="" >Phòng đơn</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="" >Phòng đơn tiêu chuẩn</a></span>
            </div>
        </div>
        <div className="lg:px-[100px] px-[20px]" >
          <div className=" py-5" >
            <Slider {...settings}>
                  <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/472/947/products/anh12082233010354fb2894f5b1193.jpg?v=1670338573270" alt="" className=" w-[664px] h-[350px]  pr-2" />
                  <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/472/947/products/anh2a207ea102d484b3486f4582e6d.jpg?v=1670338573270" alt="" className="  w-[664px] h-[350px]  pr-2" />
                  <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/472/947/products/anh2a207ea102d484b3486f4582e6d.jpg?v=1670338573270" alt=""className="  w-[664px] h-[350px] pr-2" />
                  <img src="https://bizweb.dktcdn.net/thumb/1024x1024/100/472/947/products/anh3.jpg?v=1670338577307" alt="" className=" w-[664px] h-[350px]  pr-2" />
              </Slider>
          </div>
         
        </div>
        <Footer/>
        </>
    )
}
export default DetailRoom;