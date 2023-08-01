import React, { useState } from 'react';
const DescripbeFood = ()=>{
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
                <div  className="bg-[#cd9a2b] flex justify-center py-2 px-3  items-end w-max text-white text-[18px] font-medium rounded-t-lg cursor-pointer" onClick={handleClick1}>Mô tả sản phẩm</div>
                <div  className="bg-[#cd9a2b] flex justify-center py-2 px-3  items-end w-max text-white text-[18px] font-medium rounded-t-lg cursor-pointer" onClick={handleClick2}>Chính sách đổi trả</div>
    
            </div>
            <div>
            {showContent1 && <div> 
            <div className='border border-[#cd9a2b]  rounded-lg py-4 px-3 pb-7'>
                <div className='text-[14px] text-[#333] font-mono'>Mì xào bò là món ăn được chế biến kết hợp từ nhiều loại thực phẩm khác nhau. Đó là trứng, thịt, rau và gia vị. Vì kết hợp nhiều nguyên liệu nên món ăn này có hương vị thơm ngon, hấp dẫn. Và chế biến nhanh, đơn giản nên được nhiều gia đình lựa chọn cho bữa sáng.</div>
                <div className='text-[14px] text-[#333] font-mono mt-4'>Nhiều người khá lăn tăn về hàm lượng calo trong một đĩa mì xào . Bởi món ăn là sự kết hợp của nhiều gia vị, nguyên liệu. Do đó để chính xác một đĩa mì này chứa bao nhiêu calo là rất khó. Nhưng theo bảng tính giá trị calo của thực phẩm nói chung thì một đĩa mì xào bò có khoảng 638 calo.</div>
                <div className='text-[14px] text-[#333] font-mono mt-4'>Hàm lượng calo trong mì tôm xào bò là khá cao. Nếu như bạn đang giảm cân hoặc thể trạng béo, hãy hạn chế ăn món này nhé. Ngoài ra, ăn nhiều món ăn này cũng dẫn đến gây nóng, nổi mụn, sỏi thận, dễ bị loãng xương, răng yếu,… Dù món mì xào bò thơm ngon, dễ ăn, chế biến không cầu kỳ nhưng bạn cũng không nên ăn quá nhiều. Vì bổ sung nhiều năng lượng nên món mì xào bò bạn có thể chế biến vào bữa sáng để cả ngày tràn đầy năng lượng làm việc.</div>
                <div className='text-[14px] text-[#333] font-mono mt-4'>Mì gói xào bò là món ăn nhanh gọn, nhưng chế biến thế nào để vừa thơm ngon mà không mất quá nhiều thời gian. Cùng tham khảo ngay cách chế biến mì xào bò dưới đây.</div>
            </div>
            </div>}
            {showContent2 && <div>
                <div className='border border-[#cd9a2b]  rounded-lg py-4 px-3 pb-7'>
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
            </div>}
        </div>

        </div>
            
        
    )
}
export default DescripbeFood;