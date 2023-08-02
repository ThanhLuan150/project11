import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
const Single = ()=>{
    return (
        <>
        <Header/>
        <div className="pt-[100px]">
            <div className="bg-[#f5f5f5] py-3 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="#" >Phòng đơn</a></span>
            </div>
        </div>
        <div className="xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px] my-8">
            <div className="flex flex-row justify-between bg-[#f5f5f5] w-full py-3 px-3 rounded-lg">
                <div className="text-[16px] font-bold uppercase font-medium">Phòng đơn</div>
                <div className="flex gap-3">
                    <div className="flex gap-2 ">
                        <div>
                           <i  class="fa-solid fa-arrow-up-short-wide text-gray-500"></i> 
                        </div>
                        <div className="text-[#777777] text-[14px] mt-0.5 font-medium">Sắp xếp:</div>
                        <div>
                        <select className="bg-[#f5f5f5] text-[14px] text-[#333]font-mono">
                            <option value="Mặt định">Apple</option>
                            <option value="">Banana</option>
                            <option value="">Cranberry</option>
                        </select>
                    </div>
                    </div>
                </div>
            </div>
            <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1  my-7 gap-5">
               <div className="bg-white drop-shadow-md">
                    <div className="">
                        <img className="w-full h-full " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/anh1.jpg?v=1670338577307"></img>
                    </div>
                    <div className="flex flex-col text-center items-center my-2">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Phòng đơn tiêu chuẩn</div>
                        <div className="flex items-center text-center gap-2 my-3">
                            <img className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_1.svg?1685581511029"></img>
                            <img  className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_4.svg?1685581511029"></img>
                            <img  className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_5.svg?1685581511029"></img>
                        </div>
                        <div className="w-[120px] border-[0.5px] border-gray-600 mb-[1px]"></div>
                        <div className="w-[120px] border-[0.5px] border-gray-600"></div>
                        <div className="flex text-center  gap-3 text-sm">
                            <div>02 Khách </div>
                            <div>25m²</div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between items-center xl:mx-5 xl:my-5 mx-4 my-6" >
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">500.000₫/Đêm</div>
                        <div className="bg-[#c40025] text-[12px] justify-center uppercase text-white w-max tracking-wider py-2 px-3 my-3 hover:bg-white hover:border-[#dc3545] border hover:text-[#dc3545] transition-all duration-500">Đặt phòng</div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md">
                    <div className="">
                        <img className="w-full h-full " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp21.jpg?v=1670338576510"></img>
                    </div>
                    <div className="flex flex-col text-center items-center my-2">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Phòng đơn view thành phố</div>
                        <div className="flex items-center text-center gap-2 my-3">
                            <img className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_1.svg?1685581511029"></img>
                            <img className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_2.svg?1685581511029"></img>
                            <img  className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_4.svg?1685581511029"></img>
                            <img  className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_5.svg?1685581511029"></img>
                        </div>
                        <div className="w-[120px] border-[0.5px] border-gray-600 mb-[1px]"></div>
                        <div className="w-[120px] border-[0.5px] border-gray-600"></div>
                        <div className="flex text-center gap-3 text-sm">
                            <div>02 Khách </div>
                            <div>20m²</div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between items-center xl:mx-5 xl:my-5 mx-4 my-6" >
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">700.000₫/Đêm</div>
                        <div className="bg-[#c40025] text-[12px] justify-center uppercase text-white w-max tracking-wider py-2 px-3 my-3 hover:bg-white hover:border-[#dc3545] border hover:text-[#dc3545] transition-all duration-500">Đặt phòng</div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md">
                    <div className="">
                        <img className="w-full h-full " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/anh11a713f0cbaa54ea595b6bb5e1b.jpg?v=1670338575473"></img>
                    </div>
                    <div className="flex flex-col text-center items-center my-2">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Phòng đơn view sân vườn</div>
                        <div className="flex items-center text-center gap-2 my-3">
                            <img className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_1.svg?1685581511029"></img>
                            <img className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_2.svg?1685581511029"></img>
                            <img  className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_4.svg?1685581511029"></img>
                            <img  className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_5.svg?1685581511029"></img>
                        </div>
                        <div className="w-[120px] border-[0.5px] border-gray-600 mb-[1px]"></div>
                        <div className="w-[120px] border-[0.5px] border-gray-600"></div>
                        <div className="flex text-center gap-3 text-sm">
                            <div>02 Khách </div>
                            <div>25m²</div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between items-center xl:mx-5 xl:my-5 mx-4 my-6" >
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">800.000₫/Đêm</div>
                        <div className="bg-[#c40025] text-[12px] justify-center uppercase text-white w-max tracking-wider py-2 px-3 my-3 hover:bg-white hover:border-[#dc3545] border hover:text-[#dc3545] transition-all duration-500">Đặt phòng</div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md">
                    <div className="">
                        <img className="w-full h-full " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/anh1eb6eb86adb63474a819ab595ee.jpg?v=1670338574237"></img>
                    </div>
                    <div className="flex flex-col text-center items-center my-2">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Phòng đơn view biển</div>
                        <div className="flex items-center text-center gap-2 my-3">
                            <img className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_1.svg?1685581511029"></img>
                            <img className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_2.svg?1685581511029"></img>
                            <img  className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_4.svg?1685581511029"></img>
                            <img  className="w-[32] h-[32px]" src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/tag_icon_5.svg?1685581511029"></img>
                        </div>
                        <div className="w-[120px] border-[0.5px] border-gray-600 mb-[1px]"></div>
                        <div className="w-[120px] border-[0.5px] border-gray-600"></div>
                        <div className="flex text-center gap-3 text-sm">
                            <div>01 Khách </div>
                            <div>25m²</div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between items-center xl:mx-5 xl:my-5 mx-4 my-6" >
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">900.000₫/Đêm</div>
                        <div className="bg-[#c40025] text-[12px] justify-center uppercase text-white w-max tracking-wider py-2 px-3 my-3 hover:bg-white hover:border-[#dc3545] border hover:text-[#dc3545] transition-all duration-500">Đặt phòng</div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Single;