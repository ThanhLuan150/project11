import React, { useState } from 'react';

const Service = () => {
    const [showContent1, setShowContent1] = useState(true);
    const [showContent2, setShowContent2] = useState(false);
    const [showContent3, setShowContent3] = useState(false);

  const handleClick1 = () => {
    setShowContent1(true);
    setShowContent2(false);
    setShowContent3(false)
  };

  const handleClick2 = () => {
    setShowContent1(false);
    setShowContent2(true);
    setShowContent3(false);
  };
  const handleClick3 = () => {
    setShowContent1(false);
    setShowContent2(false);
    setShowContent3(true);
  };

  return (
    <div className='bg-[#f8f9fa] py-6 '>
    <div className="my-5 xl:mx-[100px] mx-[2px] ">
        <div className="flex  sm:gap-10 gap-5 text-center items-center justify-center my-7  sm:text-[17px] text-[15px] ">
            <div className="uppercase font-medium tqd-top-menu-item tqd-top-menu-item-active " onClick={handleClick1}><img className='mx-7' src='https://bizweb.dktcdn.net/thumb/small/100/472/947/themes/888072/assets/cutlery.png?1685581511029'></img> Khách sạn</div>
            <div className="uppercase font-medium tqd-top-menu-item tqd-top-menu-item-active " onClick={handleClick2}><img className='mx-7' src='https://bizweb.dktcdn.net/thumb/small/100/472/947/themes/888072/assets/meeting.png?1685581511029'></img>Phòng họp</div>
            <div className="uppercase font-medium tqd-top-menu-item tqd-top-menu-item-active "onClick={handleClick3}><img className='mx-7' src='https://bizweb.dktcdn.net/thumb/small/100/472/947/themes/888072/assets/skin-care.png?1685581511029'></img>Làm đẹp</div>
        </div>
    <div>
        {showContent1 &&
         <div> 
            <div className='bg-[#cd9a2b] lg:flex lg:flex-row flex flex-col  w-full'>
                 <div className='basis-2/6 '>
                    <div className='italic text-[32px] text-white font-mono mx-3 mt-10' >TIỆN NGHI SANG TRỌNG</div>
                    <div>
                        <img className=' w-full h-full pl-3 pt-10 pb-3 md:pr-3 pr-2 md:pl-3 pl-2' src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/banner1_tab1.jpg?1685581511029'></img>
                    </div>
                 </div>
                 <div className='basis-2/6  xl:py-[80px] xl:px-[40px] lg:py-[60px] lg:px-[20px] py-[20px]  px-[10px] '>
                    <div className='basis-2/6 bg-[#eddcac] xl:py-[100px] xl:px-[30px] lg:py-[80px] lg:px-[20px] py-[20px] px-[10px] p w-full'>
                        <div className='text-[30px] text-[#5e5e5e] font-mono'>KHÁCH SẠN</div>
                        <div className='text-[16px] text-[#5e5e5e] my-3'>
                        Chúng tôi mang lại không gian thư giản và tiện nghi đáp ứng mọi nhu cầu cho bạn.
                        </div>
                        <div className='text-[14px] text-[#5e5e5e] font-mono'>
                        Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác...
                        </div>
                    </div>
                </div>
                 <div className='basis-2/6'>
                    <div>
                        <img className='w-full pl-3 pt-3 pb-2 md:pr-3 pr-2 md:pl-3 pl-2' src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/banner2_tab1.jpg?1685581511029'></img>
                    </div>
                 </div>
            </div>
        </div>}
        {showContent2 &&
         <div> 
            <div className='bg-[#cd9a2b] lg:flex lg:flex-row flex flex-col  w-full'>
                 <div className='basis-2/6 '>
                    <div className='italic text-[32px] text-white font-mono mx-3 mt-10' >RỘNG RÃI THANH LỊCH</div>
                    <div>
                        <img className=' w-full h-full pl-3 pt-10 pb-4 lg:pr-0 pr-7 lg:pl-5 pl-7' src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/banner1_tab2.jpg?1685581511029'></img>
                    </div>
                 </div>
                 <div className='basis-2/6  xl:py-[80px] xl:px-[40px] lg:py-[60px] lg:px-[20px] py-[20px]  px-[10px] '>
                    <div className='basis-2/6 bg-[#eddcac] xl:py-[100px] xl:px-[30px] lg:py-[80px] lg:px-[20px] py-[20px] px-[10px] p w-full'>
                        <div className='text-[30px] text-[#5e5e5e] font-mono'>PHÒNG HỌP</div>
                        <div className='text-[16px] text-[#5e5e5e] my-3'>
                        Chúng tôi mang lại không gian thư giản và tiện nghi đáp ứng mọi nhu cầu cho bạn.
                        </div>
                        <div className='text-[14px] text-[#5e5e5e] font-mono'>
                        Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác...
                        </div>
                    </div>
                </div>
                 <div className='basis-2/6'>
                    <div>
                        <img className='w-full mt-4 pr-4 lg:pl-0 pl-4 lg:pb-0 pb-4 lg:pl-0 pl-7 lg:pr-5 pr-7' src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/banner2_tab2.jpg?1685581511029'></img>
                    </div>
                 </div>
            </div>
        </div>}
        {showContent3 &&
         <div> 
            <div className='bg-[#cd9a2b] lg:flex lg:flex-row flex flex-col  w-full'>
                 <div className='basis-2/6 '>
                    <div className='italic text-[32px] text-white font-mono mx-3 mt-10' >LÀM ĐẸP</div>
                    <div>
                        <img className=' w-full h-full pl-3 pt-10 pb-4 lg:pr-0 pr-7 lg:pl-5 pl-7' src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/banner1_tab3.jpg?1685581511029'></img>
                    </div>
                 </div>
                 <div className='basis-2/6  xl:py-[80px] xl:px-[40px] lg:py-[60px] lg:px-[20px] py-[20px]  px-[10px] '>
                    <div className='basis-2/6 bg-[#eddcac] xl:py-[100px] xl:px-[30px] lg:py-[80px] lg:px-[20px] py-[20px] px-[10px] p w-full'>
                        <div className='text-[30px] text-[#5e5e5e] font-mono'>KHÁCH SẠN</div>
                        <div className='text-[16px] text-[#5e5e5e] my-3'>
                        Chúng tôi mang lại không gian thư giản và tiện nghi đáp ứng mọi nhu cầu cho bạn.
                        </div>
                        <div className='text-[14px] text-[#5e5e5e] font-mono'>
                        Là khách sạn 5 sao đẳng cấp quốc tế, tọa lạc tại giao điểm của bốn quận chính, nơi được xem như trái tim và trung tâm của TP. Hồ Chí Minh. Với hệ thống phòng tiêu chuẩn và phòng hạng sang thiết kế đẹp mắt và trang nhã được chú trọng tới từng chi tiết sẽ đem lại sự tiện nghi và thoải mái tối đa cho quý khách dù là thời gian nghỉ ngơi thư giãn hay trong chuyến công tác...
                        </div>
                    </div>
                </div>
                 <div className='basis-2/6'>
                    <div>
                        <img className='w-full mt-4 pr-4 lg:pl-0 pl-4 lg:pb-0 pb-4 lg:pl-0 pl-7 lg:pr-5 pr-7' src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/banner2_tab3.jpg?1685581511029'></img>
                    </div>
                 </div>
            </div>
        </div>}
    </div>

</div>
</div>
  );
};

export default Service;
