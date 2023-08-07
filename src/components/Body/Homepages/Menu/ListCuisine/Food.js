import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
const Food = ()=>{
    return (
        <>
        <Header/>
        <div className="pt-[100px]">
            <div className="bg-[#f5f5f5] py-3 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="#" >Món ăn</a></span>
            </div>
        </div>
        <div className="xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px] my-8">
            <div className="flex flex-row justify-between bg-[#f5f5f5] w-full py-3 px-3 rounded-lg">
                <div className="text-[16px] font-bold uppercase">Món ăn</div>
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
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp3c.jpg?v=1670338561717"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">20%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Mì xào bò</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">80.000đ <del className='text-[#98a4a9] text-[14px]'>100.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp2.jpg?v=1670338560503"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-17%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Bún xào thịt heo</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">75.000đ <del className='text-[#98a4a9] text-[14px]'>90.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/1.jpg?v=1670338559480"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-5%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Bún bò huế</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">95.000đ <del className='text-[#98a4a9] text-[14px]'>100.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp167fa56fdc0284389beb60e9d924.jpg?v=1670338558650"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-12%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Mì xào thịt heo</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">85.000đ <del className='text-[#98a4a9] text-[14px]'>97.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp189e68372dd75426e94f7aeb12c7.jpg?v=1670338557597"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Bánh mỳ ốp la trứng</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">40.000đ </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/s1.jpg?v=1670338555590"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-22%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Bánh mỳ bò kho</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">70.000đ <del className='text-[#98a4a9] text-[14px]'>90.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/s107e04443cd1449c0918a96fad371.jpg?v=1670338554503"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-11%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Bún bò heo</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">80.000đ <del className='text-[#98a4a9] text-[14px]'>90.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full cursor-pointer" src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/1f86c94ebf4b1483a9396ecbaf0c2d.jpg?v=1670338553500"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-17%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">Cơm sườn nướng</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">50.000đ <del className='text-[#98a4a9] text-[14px]'>60.000đ</del></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Food;