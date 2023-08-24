import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Fruit = ()=>{
    const [typeFoods, setTypeFoods] = useState([]);
    const id_categori_foods = 2; // Thay thế bằng ID thực mà bạn muốn tìm nạp
    
    useEffect(() => {
       // Lấy dữ liệu bằng cách sử dụng id_categori_room được cung cấp
        axios.get(`http://127.0.0.1:8000/api/type-foods/${id_categori_foods}`)
            .then(response => {
                setTypeFoods(response.data.type_foods);
            })
            .catch(error => {
                console.error('Lỗi khi tải dữ liệu:', error);
            });
    }, [id_categori_foods]); // Đảm bảo bao gồm id_categori_food trong mảng phụ thuộc

    return (
        <>
        <Header/>
        <div className="md:pt-[65px] pt-[60px]">
            <div className="bg-[#f5f5f5] lg:py-4 lg:pt-6 py-3 pt-2 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="/Fruit" >Đồ uống</a></span>
            </div>
        </div>
        <div className="xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px] my-8">
            <div className="flex flex-row justify-between bg-[#f5f5f5] w-full py-3 px-3 rounded-lg">
                <div className="text-[16px] font-bold uppercase">Đồ uống</div>
                <div className="flex gap-3">
                    <div className="flex gap-2 ">
                        <div>
                           <i  class="fa-solid fa-arrow-up-short-wide text-gray-500"></i> 
                        </div>
                        <div className="text-[#777777] text-[14px] mt-0.5 font-medium">Sắp xếp:</div>
                        <div>
                        <select className="bg-[#f5f5f5] text-[14px] text-[#333]font-mono">
                            <option value="Mặt định">Apple</option>
                            <option value="">Banana</option>
                            <option value="">Cranberry</option>
                        </select>
                    </div>
                    </div>
                </div>
            </div>
            <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1  my-7 gap-5">
                {typeFoods.map((food, index) => (
               <div className="bg-white drop-shadow-md relative group">
                    <div className="">
                        <a href={`/Detail-food/${food.id_foods}`}><img className="w-full h-full cursor-pointer" src={`../Image/Foods/${food.image_foods}`}  alt=""></img></a>
                    </div>
                    <a href="#" alt="luanle" className='flex flex-row ' >
                        {food.Discount_code && (
                        <a href='#' className="ml-2 absolute w-[50px] h-[50px] rounded-full bg-[#dc3545] py-2 px-3 top-1 left-2 mt-3 text-center font-semibold text-white hidden group-hover:block group-hover:animate-fadeIn align-middle leading-9 text-sm transition-all duration-500">{food.Discount_code}</a>
                        )}
                        <a href='#' class=" mt-3 mr-3 absolute  bg-[#ffc107] rounded-full py-2 px-2 w-[50px] h-[50px] top-1 right-1 text-center font-semibold  hidden group-hover:block group-hover:animate-fadeIn"><img class="ml-1 mt-1" src='https://bizweb.dktcdn.net/100/472/947/themes/888072/assets/cart-add.svg?1685581511029'></img></a>
                    </a>
                    <div className="flex flex-col text-left items-left my-2 mx-3">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">{food.name_foods}</div>
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">{food.discount_price} <del className='text-[#98a4a9] text-[14px]'>{food.cost_price}</del></div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Fruit;