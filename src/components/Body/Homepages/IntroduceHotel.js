const IntroduceHotel = ()=>{ 
    return(
        <>
        <div className="xl:mx-[100px] xl:my-[30px] mx-[30px] my-[40px] md:grid md:grid-cols-2 grid grid-cols-1 ">
            <div >
                <img className="w-full md:h-[full] w-[] h-[400px] lg:my-4 my-3  " img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/about.jpg?1685581511029"></img>
            </div>
            <div className="2xl:mx-16 2xl:my-16  xl:mx-14 xl:my-14 lg:mx-12 lg:my-12 md:mx-10 md:my-10">
                <div className="">
                    <div className="text-[26px] font-medium my-2">Bean Hotel</div>
                    <div className="text-[22px] my-2">Giới thiệu về chúng tôi</div>
                </div>
                <div className="text-[14px] font-mono">Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác....</div>
                <div className="bg-[#cd9a2b] text-[14px] font-mono flex justify-center   text-white w-max tracking-wider py-4 px-7 text-sm font-semibold cursor-pointer hover:bg-opacity-80 my-3">Xem thêm</div>
            </div>
        </div>
        </>
    )
}
export default IntroduceHotel ;
