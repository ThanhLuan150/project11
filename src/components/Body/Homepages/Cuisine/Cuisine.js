import React, { useState } from 'react';
import Foods from './Foods';
import Fruits from './Fruits';
import Cakes from './Cakes';
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
        
        <div className="my-5 xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px] py-5">
            <div className="flex flex-col test-center items-center font-medium">
                <div className="text-[30px] uppercase  text-center hover:text-[#cd9a2b] cursor-pointer transition-all duration-500 font-bold">Ẩm thực</div>
                <div className="w-[120px] border-[0.5px] border-gray-600 mb-[1px]"></div>
                <div className="w-[120px] border-[0.5px] border-gray-600"></div>
            </div>
            <div className="flex  sm:gap-10 gap-6 text-center justify-center my-7 text-[17px] font-medium">
                <div className="uppercase font-medium tqd-top-menu-item tqd-top-menu-item-active " onClick={handleClick1}>Món ăn</div>
                <div className="uppercase font-medium tqd-top-menu-item tqd-top-menu-item-active " onClick={handleClick2}>Đồ uống</div>
                <div className="uppercase font-medium tqd-top-menu-item tqd-top-menu-item-active "onClick={handleClick3}>Bánh ngọt</div>
            </div>
            <div>
            {showContent1 && <div> 
           <Foods/>
            </div>}
            {showContent2 && <div>
           <Fruits/>
            </div>}
            {showContent3 && <div>
            <Cakes/>
            </div>}
        </div>
    </div>
    )
}
export default Cuisine;