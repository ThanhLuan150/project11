import React, { useEffect } from 'react';

const VerifyAccount = () => {
    // useEffect(() => {
    //     const codes = document.querySelectorAll('.code');
    
    //     codes[0].focus()
    //     codes.forEach((code, idx) => {
    //       code.addEventListener('keydown', (e) => {
    //         const key = e.key;
    //         const isValidNumber = /^[0-9]*$/.test(key);
    
    //         if (isValidNumber || key === 'Backspace') {
    //           setTimeout(() => {
    //             if (key === 'Backspace' && codes[idx - 1]) {
    //               codes[idx - 1].focus();
    //             } else if (codes[idx + 1] && key !== 'Backspace') {
    //               codes[idx + 1].focus();
    //             }
    //           }, 10);
    //         } else {
    //           e.preventDefault(); // Ngăn chặn việc nhập các ký tự khác số
    //         }
    //       });
    //     });
    //   }, []);
    

  return (
    <div className="">
    <div className="bg-[#f5f5f5] py-3 ">
        <span className="mx-2 text-[#333] text-[14px] font-mono hover:text-[#cd9a2b] transition-all duration-500"><a href="/">Trang chủ</a></span>
        <i className="fa-solid fa-chevron-right mx-2" ></i>
        <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="#" >Xác thực tài khoản</a></span>
    </div>
      <div className="container bg-[#f8f9fa] rounded-lg p-6 max-w-md mx-auto text-center  mt-[100px]">
        <h2 className="text-[26px] text-[#cd9a2b] font-medium uppercase text-center py-4 ">Verify Your Account</h2>
        <p>
          We emailed you the six digit code to fantacydesignss@gmail.com
          <br /> Enter the code below to confirm your email address.
        </p>
        <div className="flex flex-wrap items-center justify-center my-6 ">
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              className="border border-[#e1e1e1] rounded-md text-center  text-xl w-16 h-20 m-1 outline-none code"
              min={0}
              max={9}
              required
            />
          ))}
        </div>
        <div className="px-2 pb-3 ">
            <button type="button" className="w-full h-full text-center items-center py-3 pb-3 bg-[#cd9a2b] rounded-lg border hover:border-[#cd9a2b] hover:bg-white transition duration-500 hover:text-[#cd9a2b] uppercase text-white text-[14px]  font-mono">Xác thực</button>
        </div>
      </div>
    </div>
  );
};

export default VerifyAccount;
