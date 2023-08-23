import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
  let Links =[
    {name:"HOME", link:"/"},
    {name:"SERVICE", link:"/Aboutus"},
    {name:"ABOUT", link:"/"},
    {name:"CONTACT", link:"/"},
  ];
  let [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
        {/* logo section */}
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <BookOpenIcon className='w-7 h-7 text-blue-600'/>
          <span>Inscribe</span>
        </div>
        {/* Menu icon */}
        <div onClick={toggleMenu} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
          {open ? <XMarkIcon/> : <Bars3BottomRightIcon />}
        </div>
        {/* link items */}
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
          {Links.map((link) => (
            <li key={link.name} className='md:ml-8 md:my-0 my-7 font-semibold'>
              <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
              {/* Render sublinks if available */}
              {link.subLinks && (
                <ul className={`md:absolute md:left-0 md:top-full md:w-auto md:pl-9 bg-white md:shadow-md z-[-1] hidden md:block ${open ? 'block' : 'hidden'}`}>
                  {link.subLinks.map((subLink) => (
                    <li key={subLink.name} className='md:my-0 my-7'>
                      <a href={subLink.link} className='text-gray-800 hover:text-blue-400 duration-500'>{subLink.name}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li className="md:ml-8 md:my-0 my-7 font-semibold">
            <button className="bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
              Get Started
            </button>
          </li>
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Header;
