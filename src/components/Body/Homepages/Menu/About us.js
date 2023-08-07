import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";

const Aboutus = ()=>{ 
    return(
        
        <>
        <Header/>
        <div className="pt-[60px]">
            <div className="bg-[#f5f5f5] py-3 lg:py-3 lg:mt-3 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="#" >Về chúng tôi</a></span>
            </div>
        </div>
        <div className="xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px] my-8">
            <a href="/Aboutus" className="text-[16px] uppercase font-medium hover:text-[#ffc107] transition-all duration-500 "><strong >Về chúng tôi</strong></a>
            <div className="text-[14px] font-mono text-[#333] mt-2">Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh.</div>
            <div className="mt-4">
                <img className="w-full h-full" src="https://bizweb.dktcdn.net/100/423/358/files/alper-gio-thieu.jpg?v=1623225626615"></img>
            </div>
            <div className="text-[14px] font-mono text-[#333] mt-3">Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác. </div>
            <div className="text-[14px] font-mono text-[#333] mt-4"><strong className="text-[14px]font-medium">Bean Hotel</strong>  tích hợp đầy đủ tất cả các dịch vụ cho Quý khách có một chuyến công tác hoặc kỳ nghỉ thật sự tiện ích như nhà hàng, phòng hội nghị, hồ bơi, dịch vụ đón tiễn sân bay, các tour du lịch, chơi golf, vé máy bay với chất lượng tốt nhất do những nhân viên chuyên nghiệp của khách sạn đảm nhiệm . Đảm bảo tuyệt đối chất lượng dịch vụ do khách sạn cung cấp là cam kết hàng đầu của chúng tôi. Điều này góp phần tạo nên sự khác biệt của hệ thống Khách sạn <strong>Bean Hotel.</strong></div>
            <div className="text-[14px] font-mono text-[#333] mt-3">Cùng với đội ngũ nhân viên được tuyển chọn và đào tạo chuyên nghiệp, chu đáo và thân thiện, <strong className="text-[14px]font-medium"> Bean Hotel</strong> hứa hẹn sẽ mang đến cho Quý khách sự thoải mái và hài lòng nhất.</div>
            <div className="text-[14px] font-mono text-[#333] mt-3">Đến với  <strong className="text-[14px]font-medium">Bean Hotel</strong>  là đến với sư tinh tế nhất về chất lượng, dịch vụ và sự thân thiện như chính ngôi nhà của bạn.</div>
            <br></br>
            <strong className="text-[14px] italic font-medium">HÃY ĐẾN BEAN HOTEL ĐỂ TRẢI NGHIỆM SỰ KHÁC BIỆT!</strong>
        </div>
        <Footer/>
        </>
    )
}
export default Aboutus;