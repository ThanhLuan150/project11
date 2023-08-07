const DetailBooking = ()=>{ 
    return(
        
        <>
        <div className="lg:flex lg:flex-row gap-5 flex flex-col">
            <div className="basis-4/6">
                <div className="text-[22px] font-medium text-[#323C42] hover:text-[#cd9a2b] transition-all duration-500 cursor-pointer">Phòng đôi tiêu chuẩn</div>
                <div className=" md:grid md:grid-cols-3  grid grid-cols-2 border border-[#cd9a2b] rounded-lg   md:gap-3 gap-0 md:px-3 px-2 py-4">
                    <div className="basis-2/6 flex gap-3 ">
                        <div className="basic-3/6">
                            <img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/people.png?1685581511029" className="w-[26px] h-[26px]"></img>
                        </div>
                        <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">02 Người lớn</div>
                    </div>
                    <div className="basis-2/6 flex gap-3 ">
                        <div className="basic-3/6">
                            <img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/people.png?1685581511029" className="w-[26px] h-[26px]"></img>
                        </div>
                        <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">01 Trẻ em</div>
                    </div>
                    <div className="basis-2/6 flex gap-3  md:pt-0 pt-3">
                        <div className="basic-3/6">
                            <img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/metter.png?1685581511029" className="w-[26px] h-[26px]"></img>
                            </div>
                        <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">Phòng 20m²</div>
                    </div>
                </div>
                <div className="font-mono text-[14px] text-[#323c42] mt-4 pb-5">Các phòng trang nhã và dãy phòng trang nghiêm của chúng tôi gợi nhớ về một thời đại đã qua. Mỗi tính năng như đường cong, thảm sang trọng, trần nhà cao, phòng tắm lát đá cẩm thạch, thiết bị làm sạch và nhiều không gian đều được bố trí một cách chu đáo để gọi cho riêng bạn. Tông màu nâu phong phú và gỗ sồi tự nhiên tạo nên những khu bảo tồn yên tĩnh và yên tĩnh, được tôn lên một cách tuyệt vời bởi đồ nội thất trang nhã.</div>
                <div className="">
                    <div className="bg-[#cd9a2b] flex justify-center py-2 px-3 border-b-0 items-end w-max text-white text-[18px] font-bold rounded-t-lg hover:bg-white border hover:border-[#cd9a2b] hover:text-[#cd9a2b] transition-all duration-500 cursor-pointer">Dịch vụ phòng</div>
                    <div className=" md:grid md:grid-cols-3  grid grid-cols-2 border border-[#cd9a2b] rounded-r-lg  md:gap-3 gap-0 md:px-3 px-2 py-4">
                        <div className="basis-2/6 flex gap-3 ">
                            <div className="basic-3/6">
                                <img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_1.svg?1685581511029" className="w-[26px] h-[26px]"></img>
                            </div>
                            <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">Cafe Buổi Sáng</div>
                        </div>
                        <div className="basis-2/6 flex gap-3 ">
                            <div className="basic-3/6">
                                <img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_2.svg?1685581511029" className="w-[26px] h-[26px]"></img>
                            </div>
                            <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">Gọi Đồ Ăn Tại Phòng</div>
                        </div>
                        <div className="basis-2/6 flex gap-3  md:pt-0 pt-3">
                            <div className="basic-3/6">
                                <img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_3.svg?1685581511029" className="w-[26px] h-[26px]"></img>
                            </div>
                            <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">Bếp Nấu Tại Phòng</div>
                        </div>
                        <div className="basis-2/6 flex gap-3 pt-3">
                            <div className="basic-3/6">
                                <img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_4.svg?1685581511029" className="w-[26px] h-[26px]"></img>
                            </div>
                            <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">Bồn Tắm Hoa Sen</div>
                        </div>
                        <div className="basis-2/6 flex gap-3 pt-3">
                            <div className="basic-3/6">
                                <img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_5.svg?1685581511029" className="w-[26px] h-[26px]"></img>
                            </div>
                            <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">Internet Không Dây</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-2/6 bg-[#F2F2F2] rounded-lg px-4 py-2 w-full">
                <div className="text-[22px] text-[#c40025] font-medium">950.000₫/Đêm</div>
                <div className="border border-[#cd9a2b] w-full my-2"></div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Họ và tên*</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full " type="text"name="" placeholder="Họ và tên"></input>
                    </div>
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Số điện thoại*</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full" type="phone"name="" placeholder="Số điện thoại"></input>
                    </div>
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Ngày nhận</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full" type="date" name="" placeholder="Họ và tên"></input>
                    </div>
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Ngày nhận</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full" type="date"name=""></input>
                    </div>
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Người lớn</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full" type="text"name="" placeholder="Người lớn"></input>
                    </div>
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Trẻ em</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full" type="text"name="" placeholder="Trẻ em"></input>
                    </div>
                    <div className="py-3 ">
                        <button type="button" className="bg-[#fff] border border-[#000000] w-full px-2 py-2 uppercase font-bold text-[16px] rounded-lg text-[#000000] hover:bg-[#000000] hover:text-white transition-all duration-500">Tạm tính</button>
                    </div>
                    <div className=" py-3">
                        <a href="/Booking" type="button" className="bg-[#cd9a2b] w-full px-4 py-2 uppercase font-bold text-[16px] text-center  rounded-lg text-white hover:bg-white border hover:border-[#cd9a2b] hover:text-[#cd9a2b] transition-all duration-500">Đặt phòng</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default DetailBooking ;
