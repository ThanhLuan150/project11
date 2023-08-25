import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get('http://127.0.0.1:8000/api/users')
        .then(response => {
          const { id_users,  name } = response.data;
          setName(name);
          setIsLoggedIn(true);
          localStorage.setItem('user_id', id_users);
        })
        .catch(error => {
          console.error(error);
          setIsLoggedIn(false);
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('id_users');
    setIsLoggedIn(false);
    alert('Logged out successfully');
    navigate('/');
  };

  const Links = [
    { name: "Trang chủ", link: "/" },
    { name: "Về chúng tôi", link: "/About-us" },
    { name: "Phòng", link: "/List-room" },
    { name: "Ẩm thực", link: "/List-cuisine" },
    { name: "Dịch vụ", link: "/Service" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-20'>
      <div className='lg:flex items-center justify-between bg-white py-4 lg:px-10 px-5'>
        <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
          <a href='/'>Bean Hotel</a>
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
            {isLoggedIn ? (
              <>
                <a href='/Profile'className='lg:ml-8 font-semibold text-gray-800'>{name}</a>
                <button onClick={handleLogout} className='btn bg-[#cd9a2b] text-white lg:ml-8 font-semibold px-3 py-2 rounded-md duration-500 md:static hover:bg-white border hover:border-[#cd9a2b] hover:text-[#cd9a2b] w-max'>Đăng xuất</button>
              </>
            ) : (
              <>
                <a href="/Login" className='btn bg-[#cd9a2b] text-white lg:ml-8 font-semibold px-3 py-2 pb-3 rounded-md duration-500 md:static  hover:bg-white border hover:border-[#cd9a2b] hover:text-[#cd9a2b] w-max'>Đăng nhập</a>
              </>
            )}
            <a href="/Cart" className='btn bg-[#cd9a2b] text-white lg:ml-8 font-semibold px-3 py-2 rounded-md duration-500 md:static hover:bg-white border hover:border-[#cd9a2b] hover:text-[#cd9a2b] w-max'>Giỏ hàng</a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
