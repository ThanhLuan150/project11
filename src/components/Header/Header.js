import React, { useState } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  let Links = [
    { name: "Trang chủ", link: "/" },
    { name: "Về chúng tôi", link: "/Aboutus" },
    { name: "Phòng", link: "/ListRoom" },
    { name: "Ẩm thực", link: "/ListCuisine" },
    { name: "Dịch vụ", link: "/Service" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-20'>
      <div className='lg:flex items-center justify-between bg-white py-4 lg:px-10 px-5'>
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <span>Bean Hotel</span>
        </div>
        <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer lg:hidden w-7 h-7'>
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul className={`lg:flex lg:items-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='lg:ml-8 lg:my-0 my-7 font-semibold'>
              <a href={link.link} className='text-gray-800 hover:text-[#cd9a2b] duration-500 font-medium'>{link.name}</a>
            </li>
          ))}
          <div className='flex lg:gap-0 gap-2'>
            <a href="/Cart" className='btn bg-[#cd9a2b] text-white lg:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static hover:bg-white border hover:border-[#cd9a2b] hover:text-[#cd9a2b]'>Giỏ hàng</a>
            <a href="/Login" className='btn bg-[#cd9a2b] text-white lg:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static  hover:bg-white border hover:border-[#cd9a2b] hover:text-[#cd9a2b]'>Đăng nhập</a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
