const Footer = ()=>{ 
    return(
        
        <>
          <div className="bg-[url('https://www.mtut.pk/wp-content/uploads/2018/09/footer-bg-black.jpg')] w-full h-full md:px-[100px] md:py-[30px] sm:px-[30px] px-[5px] py-[2px]">
            <div className="xl:grid xl:grid-cols-4 lg:grid  lg:grid-cols-3 md:grid md:grid-cols-2 sm:grid sm:grid-cols-1  md:gap-1 gap-[100px]">
                <div className="flex flex-col md:text-left text-center md:items-start md:justify-start">
                    <div className="text-white uppercase font-medium my-2"> HotLine Hỗ trợ </div>
                    <div className="text-white uppercase font-medium md:mb-0  mb-10 hover:text-[#cd9a2b] transition-all duration-500 cursor-pointer">0787628954</div>
                </div>
                <div className="flex flex-col md:text-left text-center md:items-start md:justify-start">
                    <div className="text-white uppercase font-medium my-2">EMAIL HỖ TRỢ</div>
                    <div className="text-white font-medium md:mb-0   mb-10 hover:text-[#cd9a2b] transition-all duration-500 cursor-pointer">le@gmail.com</div>
                </div>
                <div className="flex flex-col md:text-left text-center md:items-start md:justify-start justify-center  items-center">
                    <div className="text-white uppercase font-medium  my-2">ĐĂNG KÝ NHẬN TIN</div>
                    <div>
                        <form
                            action="https://facebook.us7.list-manage.com/subscribe/post?u=97ba6d3ba28239250923925a8&id=4ef3a755a8"
                            method="post"
                            id="mc-embedded-subscribe-form"
                            name="mc-embedded-subscribe-form"
                            target="_blank" className="flex md:mb-0   mb-10"
                            >
                            <input
                                type="email"
                                className="placeholder:text-[14px] placeholder:font-mono xl: xl:px-2 py-2 px-1  w-max outline-none"
                                defaultValue=""
                                placeholder="Email của bạn"
                                name="EMAIL"
                                id="mail"
                            />
                            <button name="subscribe" id="subscribe" className="bg-[#ffc107] sm:px-2 sm:py-2 px-0.5 py-0.5 sm:text-[14px] text-[12px] uppercase text-medium text-white">
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>
                <div className="flex flex-col md:text-left text-center md:items-start md:justify-start">
                    <div className="text-white uppercase font-medium my-2">KẾT NỐI CHÚNG TÔI</div>
                    <div >
                        <ul className="flex gap-3 md:mb-0  mb-10 md:justify-start md:items-start justify-center items-center">
                            <li className="facebook">
                                <a href="#" title="Facebook" target="_blank" rel="nofollow " className="">
                                <svg className="w-[38px] h-[38px] rounded-full bg-" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="25px"
                                    height="25px"
                                    viewBox="0 0 96.124 96.123"
                                    style={{ enableBackground: "new 0 0 96.124 96.123" }}
                                    xmlSpace="preserve"
                                >
                                    <path
                                    d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803   c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654   c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246   c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"
                                    data-original="#000000"
                                    className="active-path"
                                    data-old_color="#000000"
                                    fill="#EBE7E7"
                                    />
                                </svg>
                                </a>
                            </li>
                            <li className="twitter text-white">
                                <a href="#" title="Twitter" target="_blank" rel="nofollow">
                                <svg className="w-[38px] h-[38px]" 
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 512 512"
                                    style={{ enableBackground: "new 0 0 512 512" }}
                                    xmlSpace="preserve"
                                >
                                    <path
                                    d="M512,97.248c-19.04,8.352-39.328,13.888-60.48,16.576c21.76-12.992,38.368-33.408,46.176-58.016    c-20.288,12.096-42.688,20.64-66.56,25.408C411.872,60.704,384.416,48,354.464,48c-58.112,0-104.896,47.168-104.896,104.992    c0,8.32,0.704,16.32,2.432,23.936c-87.264-4.256-164.48-46.08-216.352-109.792c-9.056,15.712-14.368,33.696-14.368,53.056    c0,36.352,18.72,68.576,46.624,87.232c-16.864-0.32-33.408-5.216-47.424-12.928c0,0.32,0,0.736,0,1.152    c0,51.008,36.384,93.376,84.096,103.136c-8.544,2.336-17.856,3.456-27.52,3.456c-6.72,0-13.504-0.384-19.872-1.792    c13.6,41.568,52.192,72.128,98.08,73.12c-35.712,27.936-81.056,44.768-130.144,44.768c-8.608,0-16.864-0.384-25.12-1.44    C46.496,446.88,101.6,464,161.024,464c193.152,0,298.752-160,298.752-298.688c0-4.64-0.16-9.12-0.384-13.568    C480.224,136.96,497.728,118.496,512,97.248z"
                                    data-original="#000000"
                                    className="active-path"
                                    data-old_color="#000000"
                                    fill="#EBE7E7"
                                    />
                                </svg>
                                </a>
                            </li>
                            <li className="instagram">
                                <a href="#" title="Instagram" target="_blank" rel="nofollow">
                                    <svg className="w-[38px] h-[38px]"  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m75 512h362c41.355469 0 75-33.644531 75-75v-362c0-41.355469-33.644531-75-75-75h-362c-41.355469 0-75 33.644531-75 75v362c0 41.355469 33.644531 75 75 75zm-45-437c0-24.8125 20.1875-45 45-45h362c24.8125 0 45 20.1875 45 45v362c0 24.8125-20.1875 45-45 45h-362c-24.8125 0-45-20.1875-45-45zm0 0" />
                                        <path d="m256 391c74.4375 0 135-60.5625 135-135s-60.5625-135-135-135-135 60.5625-135 135 60.5625 135 135 135zm0-240c57.898438 0 105 47.101562 105 105s-47.101562 105-105 105-105-47.101562-105-105 47.101562-105 105-105zm0 0" />
                                        <path d="m406 151c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0" />
                                    </svg>
                                </a>
                            </li>
                            <li className="youtube">
                                <a href="#" title="Youtube" target="_blank" rel="nofollow">
                                    <svg className="w-[38px] h-[38px]" viewBox="-21 -117 682.66672 682" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m626.8125 64.035156c-7.375-27.417968-28.992188-49.03125-56.40625-56.414062-50.082031-13.703125-250.414062-13.703125-250.414062-13.703125s-200.324219 0-250.40625 13.183593c-26.886719 7.375-49.03125 29.519532-56.40625 56.933594-13.179688 50.078125-13.179688 153.933594-13.179688 153.933594s0 104.378906 13.179688 153.933594c7.382812 27.414062 28.992187 49.027344 56.410156 56.410156 50.605468 13.707031 250.410156 13.707031 250.410156 13.707031s200.324219 0 250.40625-13.183593c27.417969-7.378907 49.03125-28.992188 56.414062-56.40625 13.175782-50.082032 13.175782-153.933594 13.175782-153.933594s.527344-104.382813-13.183594-154.460938zm-370.601562 249.878906v-191.890624l166.585937 95.945312zm0 0" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-2 gap-10 my-10 grid grid-cols-1 ">
                <div>
                    <div><a href="#"><img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/logo_foo.png?1685581511029"></img></a></div>
                    <div className="text-white text-[14px]  font-mono my-2 ">Nằm ở trung tâm thành phố và nhiều thành phố khác. Chúng tôi cung cấp chỗ nghỉ thanh lịch và đầy phong cách với truy cập Wifi miễn phí trong các khu vực chung. Khách sạn có lễ tân 24 giờ, hồ bơi trong nhà, trung tâm thể dục và bãi đỗ xe miễn phí trong khuôn viên.</div>
                </div>
                <div>
                    <div className="text-white uppercase font-medium my-2">
                    HÌNH THỨC THANH TOÁN
                    </div>
                    <div className="my-3">
                        <img src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/icon_check_out.png?1685581511029"></img>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}
export default Footer ;