const Checkout = ()=>{ 
    return(
        
        <>
        <div className="lg:flex lg:flex-row flex flex-col xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px]  gap-6">
            <div className="lg:py-8 py-4 basis-2/6 ">
                <div className="text-[28px]  text-[#2a9dcc] font-sans">Bean Hotel</div>
                <div className="text-[#333333] text-[18px] font-san my-2">Thông tin nhận hàng</div>
                <div className="flex flex-col">
                    <div className="pt-3">
                        <input className="w-full h-full border rounded-md px-3 py-3 placeholder:font-medium outline-none" type="text" name="" placeholder="Email"></input>
                    </div>
                    <div className="pt-3">
                        <input className="w-full h-full border rounded-md px-3 py-3 placeholder:font-medium outline-none"  type="text" name="" placeholder="Họ và tên"></input>
                    </div>
                    <div className="pt-3">
                        <input className="w-full h-full border rounded-md px-3 py-3 placeholder:font-medium outline-none"  type="text" name="" placeholder="Số điện thoại (tùy chọn)"></input>
                    </div>
                    <div className="pt-3">
                        <input className="w-full h-full border rounded-md px-3 py-3 placeholder:font-medium outline-none" type="text" name="" placeholder="Địa chỉ(tùy chọn)"></input>
                    </div>
                    <div className="pt-3">
                       <textarea className="border border-[] w-full h-full pt-2 pb-4 px-3 placeholder:font-medium outline-none" type="text" placeholder="Ghi chú(tùy chọn)"></textarea>
                    </div>
                </div>
            </div>
            <div className="basis-2/6 lg:py-[82px] py-0">
                <div  className="py-1">
                    <div className="text-[#333333] text-[18px] font-san my-1 ">Vận chuyển</div>
                    <div className="py-2">
                        <div className="border flex flex-row justify-between py-3 rounded-md px-4 ">
                            <div className="text-[#545454] text-[14px] font-medium">Giao hàng tận nơi</div>
                            <div className="text-[#333333] text-[14px] font-medium">40.000₫</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="">
                        <div className="text-[#333333] text-[18px] font-san my-2">Thanh toán</div>
                        <div className="border rounded-md ">
                            <div className="text-[#545454] text-[14px] font-medium px-4  py-3">Thanh toán khi giao hàng (COD)</div>
                            <div className="bg-[#f8f8f8] text-[#545454] text-[14px] font-medium  px-3 py-7">Bạn chỉ phải thanh toán khi nhận được hàng</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-2/6 py-4 ">
                <div className="text-[#333333] text-[18px] font-san px-4">Đơn hàng (1 sản phẩm)</div>
                <div className="px-4">
                    <div className="border w-full my-3"></div>
                </div> 
                <div className="flex flex-rơw justify-between py-4 px-4">
                    <div className="flex flex-row gap-2">
                        <div>
                            <img src="https://bizweb.dktcdn.net/thumb/thumb/100/472/947/products/sp2.jpg?v=1670338560503"  className=""></img>
                        </div>
                        <div className="text-[#545454] text-[14px] font-medium px-4">Bún xào thịt heo</div>
                    </div>
                    <div className="text-[14px] text-[#747474] font-medium py-2">75.000đ</div>
                </div>
               <div className="px-4">
                    <div className="border w-full my-3"></div>
                </div> 
                <div className="">
                    <div className="flex flex-row justify-between  px-4 py-2">
                        <div className="text-[14px] text-[#747474] font-medium ">Tạm tính</div>
                        <div className="text-[14px] text-[#747474] font-medium ">75.000đ</div>
                    </div>
                    <div className="flex flex-row justify-between  px-4">
                        <div className="text-[14px] text-[#747474] font-medium ">Phí vận chuyển</div>
                        <div className="text-[14px] text-[#747474] font-medium ">40.000đ</div>
                    </div>
                </div>
                <div className="px-4">
                    <div className="border w-full my-3"></div>
                </div> 
                <div className="flex flex-row justify-between  px-4 py-2">
                    <div className="text-[17px] text-[#747474] font-medium ">Tổng cộng</div>
                    <div className="text-[21px] text-[#2a9dcc] font-medium ">115.000đ</div>
                </div>
                <div className="flex flex-row justify-between px-4 py-2">
                    <a  className="text-[14px] text-[#2a9dcc] font-medium "href="/Cart">Quay về giỏ hàng</a>
                    <div className="bg-[#2a6395] w-max px-5 py-3 uppercase text-white text-[14px] font-medium rounded-lg hover:bg-white border hover:border-[#2a6395] hover:text-[#2a6395] transition-all duration-500">Đặc hàng</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Checkout;