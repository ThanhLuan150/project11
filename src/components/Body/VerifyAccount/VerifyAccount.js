import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
const VerifyAccount = () => {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const inputRefs = useRef([]);

  useEffect(() => {
    // Lấy email từ query param trong URL
    const searchParams = new URLSearchParams(location.search);
    const emailParam = searchParams.get('email');
    setEmail(emailParam);
  }, [location.search]);

  const handleCodeChange = (index, value) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value !== '' && index < 5) {
      // Move focus to the next input
      inputRefs.current[index + 1].focus();
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/verify', {
        email,
        otp: code.join(''), // Chuyển đổi mảng code thành chuỗi
      });

      if (response.status === 200) {
        alert('Xác minh thành công');
        navigate(`/UserInfo?email=${encodeURIComponent(email)}`);
      } else {
        setErrorMessage('Mã xác minh bạn nhập không đúng. Vui lòng thử lại');
      }
    } catch (error) {
      console.error(error.response);
      setErrorMessage('Đã xảy ra lỗi khi xác minh mã. Vui lòng thử lại');
    }
  };

  const handleResend = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/account?email=${email}`);

      if (response.data.length > 0) {
        const resendResponse = await axios.post(`http://127.0.0.1:8000/api/resend/${response.data[0].id}`);
        if (resendResponse.status === 200) {
          alert('Resend successful');

        } else {
          setErrorMessage('Mã xác minh bạn nhập không đúng. Vui lòng thử lại');
        }
      }
    } catch (error) {
      console.error(error);
      setErrorMessage('Đã xảy ra lỗi khi gửi lại mã xác minh. Vui lòng thử lại');
    }
  };

  return (
    <div >
      <div className="bg-[#f5f5f5] py-3 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono hover:text-[#cd9a2b] transition-all duration-500"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="#" >Xác thực tài khoản </a></span>
            </div>
      <div className="container bg-[#f8f9fa] rounded-lg p-6 max-w-md mx-auto text-center  mt-[100px]">
        <form onSubmit={handleFormSubmit} style={{ paddingTop:'70px' }}>
          <div className="veri-container" >
            <h2 className="text-[26px] text-[#cd9a2b] font-medium uppercase text-center py-4 ">Verify Your Account</h2>
            &nbsp;
            <p className="info">An OTP has been sent to {email}</p>
            <div className="flex flex-wrap items-center justify-center my-6 ">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="number"
                  className="border border-[#e1e1e1] rounded-md text-center  text-xl w-16 h-20 m-1 outline-none code"
                  placeholder="0"
                  min="0"
                  max="9"
                  required
                  value={code[index]} onChange={(e) => handleCodeChange(index, e.target.value)}
                  ref={(input) => (inputRefs.current[index] = input)}
                />
              ))}
            </div>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            <button type="button" className="btn btn-link" onClick={handleResend}>
              Resend Code
            </button><br></br><br></br>
            <div className="px-2 pb-3 ">
            <button type="submit" className="w-full h-full text-center items-center py-3 pb-3 bg-[#cd9a2b] rounded-lg border hover:border-[#cd9a2b] hover:bg-white transition duration-500 hover:text-[#cd9a2b] uppercase text-white text-[14px]  font-mono">Xác thực</button>
          </div>

          </div>
        </form>
      </div>
     
    </div>

    
  );
};

export default VerifyAccount;