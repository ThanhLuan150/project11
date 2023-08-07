import React, { useState } from 'react';
const Descripbe = ()=>{
    const [showContent1, setShowContent1] = useState(true);
    const [showContent2, setShowContent2] = useState(false);

  const handleClick1 = () => {
    setShowContent1(true);
    setShowContent2(false);
  };

  const handleClick2 = () => {
    setShowContent1(false);
    setShowContent2(true);
  };
    return (
        
        <div className="my-5">
           <div className="flex gap-2">
                <div
                    className={`${showContent1? "bg-[#cd9a2b] text-white": "bg-white text-black"} flex justify-center py-2 px-3  items-end w-max text-[18px] font-medium rounded-t-lg cursor-pointer`}onClick={handleClick1}> Mô tả</div><div
                    className={`${showContent2? "bg-[#cd9a2b] text-white": "bg-white text-black"} flex justify-center py-2 px-3  items-end w-max text-[18px] font-medium rounded-t-lg cursor-pointer`}onClick={handleClick2}> Tiện nghi</div>
                </div>
            <div>
            {showContent1 && <div> 
            <div className='border border-[#cd9a2b]  rounded-b-lg py-4 px-3 pb-7'>
                <div className='text-[14px] text-[#333] font-mono'>Tiện nghi đầy đủ, chu đáo bao. Đảm bảo dịch vụ tốt nhất để quý khách có thể tận hưởng những tính năng tuyệt vời như wifi free,bãi đỗ xe....</div>
                <div className='text-[14px] text-[#333] font-mono mt-4'>Có hệ thống nhà hàng hiện đại, phục vụ các món ăn Á – Âu được chế biến từ đội ngũ đầu bếp giàu kinh nghiệm. Quý khách sẽ được thưởng thức các món ăn đa dạng và phong phú.</div>
                <div className='text-[14px] text-[#333] font-mono mt-4'><strong>Dịch vụ miễn phí:</strong> Ăn sáng tự chọn, Nước khoáng trên phòng nghỉ, Dịch Internet không dây (wifi)</div>
                <div className='text-[14px] text-[#333] font-mono mt-4'><strong >Giờ trả phòng: </strong> 12h00 hàng ngày</div>
                <div className='text-[14px] text-[#333] font-mono mt-4'><strong>Hình thức Thanh toán:</strong> Tiền mặt (VND, USD, EURO, …) thẻ tín dụng Visa và Master</div>
                <div className='text-[14px] text-[#333] font-mono mt-4'>* Nếu Quý khách thanh toán bằng ngoại tệ thì theo tỷ giá hối đoái của Ngân hàng hiện thời.</div>
            </div>
            </div>}
            {showContent2 && <div>
                <div className='border border-[#cd9a2b]  rounded-b-lg py-4 px-3 pb-7'>
                    <div className='text-[14px] font-mono text-[#333] pb-3'>Liên hệ hotline:<a href='/' className='text-[#cd9a2b] font-medium'> 1900 6750</a> để nhận được ưu đãi đặt phòng sớm nhất !</div>
                    <div className='text-[18px] font-medium text-[#000000]'>CÁC TIỆN NGHI CỦA BEAN HOTEL</div>
                    <div className='md:grid md:grid-cols-2 grid grid-cols-1  pt-4 gap-4'>
                        <div className=''>
                            <div className='text-[16px] font-medium'> Chỗ đậu xe</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2' >Miễn phí! Chỗ đậu xe miễn phí</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Có chỗ đỗ xe riêng, an toàn</div>
                        </div>
                        <div>
                            <div className='text-[16px] font-medium'> Tiện ích ngoài trời</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2' >Karaoke</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Miễn phí! Truyền hình cáp free</div>
                        </div>
                        <div>
                            <div className='text-[16px] font-medium'> Tiện ích ngoài trời</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Miễn phí! Chỗ đậu xe miễn phí</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Bàn ghế ngoài trời</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Ban công</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Sân hiên</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Sân vườn & Cây xanh</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Sân thượng</div>
                        </div>
                        <div>
                            <div className='text-[16px] font-medium'> Dịch vụ lau dọn</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Giặt khô</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Giặt ủi</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Dọn phòng hàng ngày</div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>

        </div>
            
        
    )
}
export default Descripbe;