import "./header.css";

const Header = () => {

  return (
    <div>
      <nav className="header py-2 px-3 md:py-3 xl:px-[60px] ">
        <input type='checkbox' id="checkbox"></input>
        <label htmlFor="checkbox" className='check-btn-res'>
          <i className='fas fa-bars'></i>
        </label>
        <div style={{ whiteSpace: "nowrap" }}>
          <a href='/' style={{ textDecoration: "none" }}>
            <img
              className="logo w-full bg-repeat"
              src="https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/logo.png?1685581511029"
              alt=""
            />
          </a>
        </div>
        <ul className='ul-nav md:text-[14px] text-[16px] w-full ' id='ul-nav'>
          <li className='li-nav firstnav p-6 text-center '>
            <a href="/">Trang chủ</a>
          </li>
          <li className='li-nav p-6 text-center'>
            <a href="/Aboutus">Về chúng tôi</a>
          </li>
          <li className='li-nav p-6 text-center' style={{ position: "relative" }}>
            <a href="/VipRoom">Phòng</a>
            <ul id="type-movies">
              <li className='li-nav li-drop '>
                <a href="/Single" >Phòng đơn</a>
              </li>
              <li className='li-nav li-drop'>
                <a href="/Double">Phòng đôi</a>
              </li>
              <li className='li-nav li-drop'>
                <a href="/Vip">Phòng Vip</a>
              </li>
            </ul>
          </li>
          <li className='li-nav p-6 text-center' style={{ position: "relative" }}>
            <a href="/ListCuisine">Ẩm thực</a>
            <ul id="type-movies">
              <li className='li-nav li-drop'>
                <a href="/Food">Đồ ăn </a>
              </li>
              <li className='li-nav li-drop'>
                <a href="/Fruit">Nước uống</a>
              </li>
              <li className='li-nav li-drop'>
                <a href="/Cake">Bánh ngọt</a>
              </li>
            </ul>
          </li>
          <li className='li-nav firstnav p-6 text-center'>
            <a href="/Service">Dịch vụ</a>
          </li>
          <li className='li-nav p-6 text-center'>
            <div className="search_site" style={{ display: 'flex' }}>
              <div className="search_result">
              <input id='search' type="text" className="search" />
              </div>
            </div>
          </li>
          <li className='li-nav  text-center'>
              <a href="/Cart" className="button ">
                <i class="fa-solid fa-cart-shopping mr-2"></i>
                Giỏ hàng
              </a>
            </li>
            <li className='li-nav  text-center'>
              <a href="/Login" className="button">
              <i class="fa-solid fa-user mr-2"></i>
                Đăng nhập
              </a>
            </li>
        </ul>

      </nav>
    </div>
  );
};

export default Header;