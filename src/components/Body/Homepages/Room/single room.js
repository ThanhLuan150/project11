const SingleRoom = ()=>{ 
    return(
        <div className=" mx-[100px]">
            <div className="text-[30px] uppercase  text-center hover:text-[#ffc107]">Phòng</div>
            <div className="grid grid-cols-4 my-7">
                <div className="bg-white drop-shadow-md">
                    <div className="">
                        <img className="w-full h-full " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/anh1.jpg?v=1670338577307"></img>
                    </div>
                    <div className="flex flex-col text-center items-center my-2">
                        <div className="uppercase text-[14px] font-medium">Phòng đơn tiêu chuẩn</div>
                        <div className="flex items-center text-center gap-2 my-2">
                            <img className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_1.svg?1685581511029"></img>
                            <img  className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_4.svg?1685581511029"></img>
                            <img  className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_5.svg?1685581511029"></img>
                        </div>
                        <div className="flex text-center gap-3">
                            <div>02 Khách </div>
                            <div>20m²</div>
                        </div>
                    </div>
                    <div className="flex gap-[130px] ">
                        <div className="text-start">500.000₫/Đêm</div>
                        <div className="">Đặt phòng</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleRoom ;