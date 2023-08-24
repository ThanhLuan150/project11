import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from "../../../../Header/Header";
import Footer from "../../../../Footer/Footer";
const Vip = ()=>{
    const [typeRooms, setTypeRooms] = useState([]);
    const id_categori_room = 3; // Thay thế bằng ID thực mà bạn muốn tìm nạp

    useEffect(() => {
       // Lấy dữ liệu bằng cách sử dụng id_categori_room được cung cấp
        axios.get(`http://127.0.0.1:8000/api/type-rooms/${id_categori_room}`)
            .then(response => {
                setTypeRooms(response.data.type_rooms);
            })
            .catch(error => {
                console.error('Lỗi khi tải dữ liệu:', error);
            });
    }, [id_categori_room]); // Đảm bảo bao gồm id_categori_room trong mảng phụ thuộc

    return (
        <>
        <Header/>
        <div className="md:pt-[65px] pt-[60px]">
            <div className="bg-[#f5f5f5] lg:py-4 lg:pt-6 py-3 pt-2 ">
                <span className="mx-2 text-[#333] text-[14px] font-mono"><a href="/">Trang chủ</a></span>
                <i className="fa-solid fa-chevron-right mx-2" ></i>
                <span className="mx-2 text-[#915b10] text-[14px] font-mono"><a href="#" >Phòng Víp</a></span>
            </div>
        </div>
        <div className="xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px] my-8">
            <div className="flex flex-row justify-between bg-[#f5f5f5] w-full py-3 px-3 rounded-lg">
                <div className="text-[16px] font-bold uppercase font-medium">Phòng đơn</div>
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
            {typeRooms.map((room, index) => (
                <div className="bg-white drop-shadow-md" key={index}>
                   <div className="">
                        <Link to={`/Detail-room/${room.id_rooms}`}>
                            <img className="w-full h-full cursor-pointer" src={`../Image/Rooms/${room.image_rooms}`} alt="" />
                        </Link>
                    </div>
                    <div className="flex flex-col text-center items-center my-2">
                        <div className="uppercase text-[14px] font-medium my-1 cursor-pointer hover:text-[#cd9a2b] transition-all duration-500">{room.rooms_name}</div>
                        <div className="flex items-center text-center gap-2 my-3">
                            <img className="w-[32] h-[32px]" src={`../Image/room_services/${room.coffee_room_services_image}`}></img>
                            <img className="w-[32] h-[32px]" src={`../Image/room_services/${room.call_room_services_image}`}></img>
                            <img className="w-[32] h-[32px]" src={`../Image/room_services/${room.kitchen_room_services_image}`}></img>
                            <img className="w-[32] h-[32px]" src={`../Image/room_services/${room.bathtub_room_services_image}`}></img>
                            <img className="w-[32] h-[32px]" src={`../Image/room_services/${room.internet_room_services_image}`}></img>
                        </div>
                        <div className="flex text-center  gap-3 text-sm">
                            <div>{room.old_people_information_name}</div>
                            <div>{room.young_people_information_name}</div>
                            <div>{room.acreage_information_name}</div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row justify-between items-center xl:mx-5 xl:my-5 mx-4 my-6">
                        <div className=" text-[#c40025] font-medium 2xl:text-[16px] text-[14px] ">{room.price_rooms}₫/Đêm</div>
                        <a href='/' className="bg-[#c40025] text-[12px] justify-center uppercase cursor-pointer text-white w-max tracking-wider py-2 px-3 my-3 hover:bg-white hover:border-[#dc3545] border hover:text-[#dc3545] transition-all duration-500">Đặt phòng</a>
                    </div>
                </div>
            ))}
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Vip;