import React, { useState } from 'react';
const DescripbeFood = ()=>{
  
    return (
        
        <div className="my-5">
            <div className="flex gap-2">
                <div
                    className="bg-[#cd9a2b] flex justify-center py-2 px-3 border-b-0 items-end w-max text-white text-[18px] font-bold rounded-t-lg hover:bg-white border hover:border-[#cd9a2b] hover:text-[#cd9a2b] transition-all duration-500 cursor-pointer"> Chính sách đổi trả</div>
                </div>
            <div>
            <div>
                <div className='border border-[#cd9a2b]  rounded-b-lg py-4 px-3 pb-7'>
                    <div className=''>
                        <div className=''>
                            <div className='text-[14px] font-mono text-[#333] pt-2' >+ Sản phẩm lỗi, hỏng do quá trình sản xuất hoặc vận chuyện</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2' >+ Nằm trong chính sách đổi trả sản phẩm của Bean</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2' >+ Sản phẩm còn nguyên tem mác chưa qua sử dụng và chưa giặt là</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2' >+ Thời gian đổi trả nhỏ hơn 15 ngày kể từ ngày nhận hàng</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2' >+ Chi phí bảo hành về sản phẩm, vận chuyển khách hàng chịu chi phí</div>
                        </div>
                        <div>
                            <div className='text-[16px] font-medium'> Điều kiện đổi trả hàng</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2' >Điều kiện về thời gian đổi trả: trong vòng 01 ngày kể từ khi nhận được hàng và phải liên hệ gọi ngay cho chúng tôi theo số điện thoại trên để được xác nhận đổi trả hàng.</div>
                        </div>
                        <div>
                            <div className='text-[16px] font-medium'> Điều kiện đổi trả hàng:</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>- Sản phẩm gửi lại phải còn nguyên đai nguyên kiện</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>- Phiếu bảo hành (nếu có) và tem của công ty trên sản phẩm còn nguyên vẹn.</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>- Sản phẩm đổi/ trả phải còn đầy đủ hộp, giấy Hướng dẫn sử dụng và chưa qua sử dụng.</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>- Quý khách chịu chi phí vận chuyển, đóng gói, thu hộ tiền, chi phí liên lạc tối đa tương đương 20% giá trị đơn hàng.</div>
                        </div>
                        <div>
                            <div className='text-[16px] font-medium'> Dịch vụ lau dọn</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Giặt khô</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Giặt ủi</div>
                            <div className='text-[14px] font-mono text-[#333] pt-2'>Dọn phòng hàng ngày</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </div>
            
        
    )
}
export default DescripbeFood;