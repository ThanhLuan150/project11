import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Cart = ()=>{
    return (
        <>
        <Header/>
        <div className="pt-[60px]">
            <div className="bg-[#f5f5f5] py-3 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="/Double" >Giỏ hàng của bạn</a></span>
            </div>
        </div>
        <div className="xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px]  my-8">
            <div className="flex flex-row justify-between bg-[#f5f5f5] w-full py-3 px-3 rounded-lg">
                <div className="text-[16px] font-bold uppercase">Giỏ hàng của bạn </div>
            </div>
            <div className="py-5">
                <div className="border  hidden lg:flex lg:flex-row rounded-t-lg px-3 py-8">
                    <div className="basis-3/6 text-[14px] font-bold uppercase ">Thông tin sản phẩm</div>
                    <div className="basis-1/6 text-[14px] font-bold uppercase lg:text-center text-end">Đơn giá</div>
                    <div className="basis-1/6 text-[14px] font-bold uppercase lg:text-center text-end">Số lượng</div>
                    <div className="basis-1/6 text-[14px] font-bold uppercase lg:text-center text-end">Thành tiền</div>
                </div>
                <div className="border rounded-b-lg lg:flex lg:flex-row gap-2  grid grid-cols-2 px-3 py-5">
                    <div className="basis-3/6  flex flex-row gap-4">
                        <div>
                            <img className="sm:w-full max-h-[100px] max-w-[60px] sm:h-full" src="https://bizweb.dktcdn.net/thumb/compact/100/472/947/products/sp189e68372dd75426e94f7aeb12c7.jpg"></img> 
                        </div>
                        <div className="sm:py-4 py-0">
                            <div className="text-[#323c42] text-[13px] font-medium w-max">Bánh mì ốp la trứng</div>
                            <a href="/Delete" className="text-[#cd9a2b] text-[14px] font-medium">Xóa</a>
                        </div>
                    </div>
                    <div className="basis-1/6 text-[14px] font-bold lg:text-center text-end text-[#e8002d] sm:py-5 py-2 ">40.000₫</div>
                    <div className="basis-1/6 py-5 xl:pl-14 lg:pl-8   ">
                        <div className="basis-1/6 flex flex-row">
                            <div className="flex ">
                                <button className="border w-[30px] h-[30px]  border-[#ddd]" type="button">-</button>
                                <input className="outline-none w-[40px] h-[30px] border px-2 text-center border-[#ddd]" type="text"name=""  ></input>
                                <button className="border w-[30px] h-[30px]  border-[#ddd]" type="button">+</button>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/6 text-[14px] font-bold lg:text-center text-end text-[#e8002d] sm:py-5 py-6">40.000₫</div>
                </div>
            </div>
            <div className="flex justify-end text-end sm:gap-0 gap-2">
                <div className="text-[#323c42] text-[15px] font-medium uppercase">Tổng tiền</div>
                <div className="basis-1/6 text-[14px] font-bold text-[#e8002d]">40.000₫</div>
            </div>
            <div className="lg:flex lg:flex-row flex flex-col justify-between text-center py-3 gap-3">
                <a href="/" className="md:px-24 px-18 py-3 bg-black text-white uppercase text-[14px] xl:w-[50%] w-full font-mono rounded-lg hover:border hover:border-black hover:bg-white hover:text-black transition-all duration-500">Tiếp tục mua hàng</a>
                <a href="/Checkout" className="px-24 py-3 bg-[#cd9a2b] text-[14px]  uppercase font-mono xl:w-[50%] w-full text-white rounded-lg hover:border hover:border-[#cd9a2b] hover:bg-white hover:text-[#cd9a2b] transition-all duration-500">Thanh toán</a>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Cart;