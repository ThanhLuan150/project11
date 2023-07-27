const Login = ()=>{ 
    return(
        <div className="">
            <div className="bg-[#f5f5f5] py-3 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="#" >Đăng nhập tài khoản</a></span>
            </div>
            <div className="bg-[#f8f9fa] h-screen">
                <div className="bg-[#f8f9fa]">
                    <div className="py-16 flex justify-center items-center ">
                        <form action="" className="bg-[#fff] rounded-lg lg:w-[40%] md:w-[50%] sm:w-[60%] w-[90%]  ">
                            <div className="text-[26px] text-[#cd9a2b] font-medium uppercase text-center py-4 ">ĐĂNG NHẬP</div>
                            <div className="px-2 py-3">
                                <input className="border border-[#e1e1e1] box-shadow outline-none py-2 w-full pl-4 placeholder:text-[14px] placeholder:text-[#333] placeholder:font-mono" type="text"name="" placeholder="Email" ></input>
                            </div>
                            <div className="px-2 pb-3">
                                <input className="border border-[#e1e1e1] box-shadow outline-none py-2 w-full pl-4 placeholder:text-[14px] placeholder:text-[#333] placeholder:font-mono" type="password"name="" placeholder="Password" ></input>
                            </div>
                            <div className="px-2 pb-3">
                                <input className="border border-[#e1e1e1] box-shadow outline-none py-2 w-full pl-4 placeholder:text-[14px] placeholder:text-[#333] placeholder:font-mono" type="password"name="" placeholder="ConfilmPassword" ></input>
                            </div>
                            <div className="px-2 pb-3 ">
                                <button type="button" className="w-full h-full text-center items-center py-3 pb-4 bg-[#cd9a2b] rounded-lg border hover:border-[#cd9a2b] hover:bg-white transition duration-500 hover:text-[#cd9a2b] uppercase text-white text-[14px]  font-mono">Đăng nhập</button>
                            </div>
                            <div className="flex flex-row justify-between px-2 pb-5">
                                <a href="/ForgetPassword"className="text-[14px] text-[#333] font-mono ">Quên mật khẩu</a>
                                <a href="/Register" className="text-[14px] text-[#333] font-mono ">Đăng ký tại đây</a>
                            </div>
                            <div className="text-[14px] text-[#333] font-mono text-center">Hoặc đăng nhập qua</div>
                            <div>
                                <div className="flex flex-row justify-center items-center gap-4 py-10">
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
export default Login ;