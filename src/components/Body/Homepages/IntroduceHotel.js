const IntroduceHotel = ()=>{ 
    return(
        <>
        <div className="xl:mx-[100px] lg:mx-[30px]  xl:my-[30px] mx-0 my-[10px] lg:grid lg:grid-cols-2 grid grid-cols-1 ">
            <div className="lg:mx-0 md:mx-[50px] mx-[2px] lg:my-4 my-3" >
                <img className="w-full h-full  cursor-pointer  " img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/about.jpg?1685581511029"></img>
            </div>
            <div className="2xl:mx-16 2xl:my-16  xl:mx-14 xl:my-14 lg:mx-12 lg:my-12 md:mx-14 md:my-10 mx-[10px]  my-3">
                <div className="">
                    <div className="text-[26px] font-medium my-2 hover:text-[#cd9a2b] transition-all duration-500 cursor-pointer">Bean Hotel</div>
                    <div className="text-[22px] my-2">Giới thiệu về chúng tôi</div>
                </div>
                <div className="text-[14px] font-mono">Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác....</div>
                <a href="/About-us" className="bg-[#cd9a2b] text-[14px] font-mono flex justify-center   text-white w-max  py-3 px-8 cursor-pointer hover:bg-white border hover:border-[#cd9a2b] hover:text-[#cd9a2b] my-3 transition-all duration-500">Xem thêm</a>
            </div>
        </div>
        </>
    )
}
export default IntroduceHotel ;
