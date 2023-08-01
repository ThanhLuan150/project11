import React, { useState } from 'react';
const Cuisine = ()=>{
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
        
        <div className="my-5 xl:mx-[100px] mx-[40px]">
            <div className="flex flex-col test-center items-center">
                <div className="text-[30px] uppercase  text-center hover:text-[#ffc107] transition-all duration-500">Ẩm thực</div>
                <div className="w-[120px] border-[0.5px] border-gray-600 mb-[1px]"></div>
                <div className="w-[120px] border-[0.5px] border-gray-600"></div>
            </div>
            <div className="flex  gap-10 text-center justify-center my-7 text-[17px]">
                <div className="uppercase font-medium tqd-top-menu-item tqd-top-menu-item-active " onClick={handleClick1}>Món ăn</div>
                <div className="uppercase font-medium tqd-top-menu-item tqd-top-menu-item-active " onClick={handleClick2}>Đồ uống</div>
                <div className="uppercase font-medium tqd-top-menu-item tqd-top-menu-item-active "onClick={handleClick3}>Bánh ngọt</div>
            </div>
            <div>
            {showContent1 && <div> 
            <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1  my-7 gap-5">
               <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <a href='/DetailFood'><img className="w-full h-full " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp3c.jpg?v=1670338561717"></img></a>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">20%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Mì xào bò</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">80.000đ <del className='text-[#98a4a9] text-[14px]'>100.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp2.jpg?v=1670338560503"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-17%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Bún xào thịt heo</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">75.000đ <del className='text-[#98a4a9] text-[14px]'>90.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/1.jpg?v=1670338559480"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-5%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Bún bò huế</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">95.000đ <del className='text-[#98a4a9] text-[14px]'>100.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp167fa56fdc0284389beb60e9d924.jpg?v=1670338558650"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-12%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Mì xào thịt heo</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">85.000đ <del className='text-[#98a4a9] text-[14px]'>97.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp189e68372dd75426e94f7aeb12c7.jpg?v=1670338557597"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Bánh mỳ ốp la trứng</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">40.000đ </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/s1.jpg?v=1670338555590"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-22%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Bánh mỳ bò kho</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">70.000đ <del className='text-[#98a4a9] text-[14px]'>90.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/s107e04443cd1449c0918a96fad371.jpg?v=1670338554503"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-11%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Bún bò heo</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">80.000đ <del className='text-[#98a4a9] text-[14px]'>90.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/1f86c94ebf4b1483a9396ecbaf0c2d.jpg?v=1670338553500"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-17%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Cơm sườn nướng</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">50.000đ <del className='text-[#98a4a9] text-[14px]'>60.000đ</del></div>
                    </div>
                </div>
            </div>
            <div className="bg-[#cd9a2b] text-[15px] flex justify-center uppercase  text-white w-max tracking-wider py-4 px-7 text-sm font-semibold cursor-pointer hover:bg-opacity-80 my-3">Xem thêm</div>
            </div>}
            {showContent2 && <div>
                <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1  my-7 gap-5">
               <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp102858740354840a88b225a87336.jpg?v=1670338552667"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">25%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Trà đào cam xả</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">30.000đ <del className='text-[#98a4a9] text-[14px]'>40.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp16b39bdb3f0124cb3baa29962783.jpg?v=1670338551617"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Maxcha đá xay</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">55.000đ </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp1f231696ea90f4f41a22f63551b1.jpg?v=1670338550470"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Cam vắt </div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">45.000đ </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp37180694c0240419a993f6392327.jpg?v=1670338549453"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-11%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Trà quế cam thảo</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">80.000đ <del className='text-[#98a4a9] text-[14px]'>90.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp1fc77b8d640324c8aa2d62a91e47.jpg?v=1670338548440"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                    <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-25%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Trà xanh hoa nhài</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">60.000đ <del className='text-[#98a4a9] text-[14px]'>80.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp33d25a293649a445a8c15fd1e5e2.jpg?v=1670338547557"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-17%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Cafe Dừa Sala</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">50.000đ <del className='text-[#98a4a9] text-[14px]'>60.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp2a168facb323c4b239291ec586cc.jpg?v=1670338546363"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">TRÀ YOGURT ĐÀO</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">80.000đ </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp10a33fca4042b465386d9adbe1aa.jpg?v=1670338545327"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">TRÀ HOA HỒNG KEM</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">60.000đ </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#cd9a2b] text-[15px] flex justify-center uppercase  text-white w-max tracking-wider py-4 px-7 text-sm font-semibold cursor-pointer hover:bg-opacity-80 my-3">Xem thêm</div>
            </div>}
            {showContent3 && <div>
            <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1  my-7 gap-5">
               <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp102858740354840a88b225a87336.jpg?v=1670338552667"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">25%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Trà đào cam xả</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">30.000đ <del className='text-[#98a4a9] text-[14px]'>40.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp16b39bdb3f0124cb3baa29962783.jpg?v=1670338551617"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Maxcha đá xay</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">55.000đ </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp1f231696ea90f4f41a22f63551b1.jpg?v=1670338550470"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Cam vắt </div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">45.000đ </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp37180694c0240419a993f6392327.jpg?v=1670338549453"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-11%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Trà quế cam thảo</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">80.000đ <del className='text-[#98a4a9] text-[14px]'>90.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp1fc77b8d640324c8aa2d62a91e47.jpg?v=1670338548440"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                    <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-25%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Trà xanh hoa nhài</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">60.000đ <del className='text-[#98a4a9] text-[14px]'>80.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp33d25a293649a445a8c15fd1e5e2.jpg?v=1670338547557"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">-17%</a>
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">Cafe Dừa Sala</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">50.000đ <del className='text-[#98a4a9] text-[14px]'>60.000đ</del></div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp2a168facb323c4b239291ec586cc.jpg?v=1670338546363"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">TRÀ YOGURT ĐÀO</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">80.000đ </div>
                    </div>
                </div>
                <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <img className="w-full h-full  " src="https://bizweb.dktcdn.net/thumb/large/100/472/947/products/sp10a33fca4042b465386d9adbe1aa.jpg?v=1670338545327"></img>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 hover:text-[#ffc107] transition-all duration-500">TRÀ HOA HỒNG KEM</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">60.000đ </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#cd9a2b] text-[15px] flex justify-center uppercase  text-white w-max tracking-wider py-4 px-7 text-sm font-semibold cursor-pointer hover:bg-opacity-80 my-3">Xem thêm</div>
        </div>}
        </div>

        </div>
            
        
    )
}
export default Cuisine;