import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate, Link } from 'react-router-dom';
const Register = ()=>{ 
    const [lastname, setLastname] =useState('');
    const [firstname, setFirstname] =useState();
    const [email, setEmail] = useState('');
    const [phone,setPhone ] =useState('');
    const [password, setPassword] = useState('');
    const [c_password, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Lấy email từ query param trong URL
      const searchParams = new URLSearchParams(window.location.search);
      const emailParam = searchParams.get('email');
      setEmail(emailParam);
    },2000, []);

    const handleLastnameChange =(e) =>{
        setLastname(e.target.value)
        setErrors([]);
    }

    const handleFirstnameChange =(e) =>{
        setFirstname(e.target.value)
        setErrors([]);
    }

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      setErrors([]);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        setErrors([]);
      };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      setErrors([]);
    };
  
    const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
      setErrors([]);
    };


  
    const handleFormSubmit = async (e) => {
      e.preventDefault();
  
      const validationErrors = [];
      
        

       // Xác thực định dạng số điện thoại
        const phoneRegex = /^\d{10}$/; 
        if (!phone.match(phoneRegex)) {
            validationErrors.push('Vui lòng nhập số điện thoại hợp lệ');
        }

      // Kiểm tra tính hợp lệ của email, mật khẩu và mật khẩu xác nhận
      if (!validateEmail(email)) {
        validationErrors.push('Vui lòng nhập địa chỉ email hợp lệ');
      }
  
      if (!validatePassword(password)) {
        validationErrors.push('Mật khẩu phải có ít nhất 8 ký tự và chứa các ký tự đặc biệt');
      }
  
      if (password !== c_password) {
        validationErrors.push('Xác nhận mật khẩu không khớp');
      }
  
      if (validationErrors.length > 0) {
        setErrors(validationErrors);
        return;
      }
  
      try {
  
   // Kiểm tra email đã tồn tại hay chưa
        const checkEmailResponse = await axios.get(`http://127.0.0.1:8000/api/checkmail?email=${encodeURIComponent(email)}`);
  
        if (checkEmailResponse.data.exists) {
          setErrors(['Email đã tồn tại']);
          return;
        }
  
        // Gửi email xác thực
        await axios.post('http://127.0.0.1:8000/api/Register', { lastname,firstname,email,phone,password,c_password });
        
  
        alert('Đăng ký thành công. Vui lòng kiểm tra email của bạn để xác minh.');

  
        // Chuyển hướng đến trang VerifyCodenavigate(`/VerifyAccount?email=${encodeURIComponent(email)}`);
       

        // Chuyển hướng đến trang VerifyCode
        navigate(`/VerifyAccount?email=${encodeURIComponent(email)}`);
      } catch (error) {
        console.error(error);
        // alert('Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.');
  
      }
    };
  
    const validateEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
    };
  
    const validatePassword = (password) => {
  
      // Ví dụ: mật khẩu phải có ít nhất 8 ký tự và chứa ký tự đặc biệt
  
      return password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);
    };
  
    return(
        <div className="">
            <div className="bg-[#f5f5f5] py-3 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono hover:text-[#cd9a2b] transition-all duration-500"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="#" >Đăng ký tài khoản </a></span>
            </div>
            <div className="bg-[#f8f9fa] h-screen">
                <div className="bg-[#f8f9fa]">
                    <div className="py-16 flex justify-center items-center ">
                        <form action="" className="bg-[#fff] rounded-lg lg:w-[40%] md:w-[50%] sm:w-[60%] w-[100%]  " onSubmit={handleFormSubmit}>
                            <div className="text-[26px] text-[#cd9a2b] font-medium uppercase text-center py-4 ">Đăng ký</div>
                            <div className="text-[14px] text-[#333] font-mono text-center"> Đã có tài khoản , đăng nhập <a href="/Login" className="text-[#cd9a2b]">Tại đây</a></div>
                            <div className="px-2 py-3">
                                <input className="border border-[#e1e1e1] box-shadow outline-none py-2 w-full pl-4 placeholder:text-[14px] placeholder:text-[#333] placeholder:font-mono" type="text"name="lastname" value={lastname} placeholder="Họ" onChange={handleLastnameChange} required ></input>
                            </div>
                            <div className="px-2 pb-3">
                                <input className="border border-[#e1e1e1] box-shadow outline-none py-2 w-full pl-4 placeholder:text-[14px] placeholder:text-[#333] placeholder:font-mono" type="text"name="firstname" value={firstname} placeholder="Tên" onChange={handleFirstnameChange}  required></input>
                            </div>
                            <div className="px-2 pb-3">
                                <input className="border border-[#e1e1e1] box-shadow outline-none py-2 w-full pl-4 placeholder:text-[14px] placeholder:text-[#333] placeholder:font-mon" type="email"name="email" value={email} placeholder="Email"onChange={handleEmailChange} required></input>
                            </div>
                            <div className="px-2 pb-3"><input className="border border-[#e1e1e1] box-shadow outline-none py-2 w-full pl-4 placeholder:text-[14px] placeholder:text-[#333] placeholder:font-mono" type="phone"name="phone" value={phone} placeholder="Số điện thoại" onChange={handlePhoneChange} required></input>
                            </div>
                            <div className="px-2 pb-3">
                                <input className="border border-[#e1e1e1] box-shadow outline-none py-2 w-full pl-4 placeholder:text-[14px] placeholder:text-[#333] placeholder:font-mono" type="password"name="password" value={password}  placeholder="Password" onChange={handlePasswordChange}required ></input>
                            </div>
                            <div className="px-2 pb-3">
                                <input className="border border-[#e1e1e1] box-shadow outline-none py-2 w-full pl-4 placeholder:text-[14px] placeholder:text-[#333] placeholder:font-mono" type="password"name="c_password" value={c_password} placeholder="ConfilmPassword"  onChange={handleConfirmPasswordChange} required></input>
                            </div>
                            {errors.length > 0 && (
                                <div className=" text-center items-center py-5">
                                    {errors.map((error, index) => (
                                    <p key={index}>{error}</p>
                                    ))}
                                </div>
                             )}
                            <div className="px-2 pb-3 ">
                                <button type="submit" className="w-full h-full text-center items-center py-3 pb-3 bg-[#cd9a2b] rounded-lg border hover:border-[#cd9a2b] hover:bg-white transition duration-500 hover:text-[#cd9a2b] uppercase text-white text-[14px]  font-mono">Đăng ký</button>
                            </div>
                            <div className="text-[14px] text-[#333] font-mono text-center">Hoặc đăng nhập bằng</div>
                            <div>
                                <div className="flex flex-row justify-center items-center gap-4 py-7">
                                    <a href="#" ><img className="w-[30px] h-[30px]" src="https://1.bp.blogspot.com/-S8HTBQqmfcs/XN0ACIRD9PI/AAAAAAAAAlo/FLhccuLdMfIFLhocRjWqsr9cVGdTN_8sgCPcBGAYYCw/s1600/f_logo_RGB-Blue_1024.png"></img></a>
                                    <a href="#"><img className="w-[30px] h-[30px]" src="https://www.google.com/images/branding/product/2x/gmail_2020q4_512dp.png"></img></a>
                                </div>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>    
    )
}
export default Register ;