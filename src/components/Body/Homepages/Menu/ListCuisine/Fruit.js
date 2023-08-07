import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
const Fruit = ()=>{
    return (
        <>
        <Header/>
        <div className="pt-[60px]">
            <div className="bg-[#f5f5f5] py-3 lg:py-3 lg:mt-3  ">
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="#" >Đồ uống</a></span>
            </div>
        </div>
        <div className="xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px] my-8">
            <div className="flex flex-row justify-between bg-[#f5f5f5] w-full py-3 px-3 rounded-lg">
                <div className="text-[16px] font-bold uppercase">Đồ uống</div>
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
               <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp102858740354840a88b225a87336.jpg?v=1670338552667"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">25%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Trà đào cam xả</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">30.000đ <del className='text-[#98a4a9] text-[14px]'>40.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp16b39bdb3f0124cb3baa29962783.jpg?v=1670338551617"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Maxcha đá xay</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">55.000đ </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp1f231696ea90f4f41a22f63551b1.jpg?v=1670338550470"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Cam vắt </div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">45.000đ </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp37180694c0240419a993f6392327.jpg?v=1670338549453"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-11%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Trà quế cam thảo</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">80.000đ <del className='text-[#98a4a9] text-[14px]'>90.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp1fc77b8d640324c8aa2d62a91e47.jpg?v=1670338548440"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                    <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-25%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Trà xanh hoa nhài</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">60.000đ <del className='text-[#98a4a9] text-[14px]'>80.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp33d25a293649a445a8c15fd1e5e2.jpg?v=1670338547557"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-17%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Cafe Dừa Sala</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">50.000đ <del className='text-[#98a4a9] text-[14px]'>60.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp2a168facb323c4b239291ec586cc.jpg?v=1670338546363"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">TRÀ YOGURT ĐÀO</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">80.000đ </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp10a33fca4042b465386d9adbe1aa.jpg?v=1670338545327"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">TRÀ HOA HỒNG KEM</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">60.000đ </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Fruit;