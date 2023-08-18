import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SingleRoom = () => {
    const [typeRooms, setTypeRooms] = useState([]);
    const id_categori_room = 1; // Thay thế bằng ID thực mà bạn muốn tìm nạp

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

    return(
        <div className=" xl:mx-[100px] lg:mx-[30px] md:mx-[20px] mx-[10px] mt-20 py-5">
            <div className="flex flex-col test-center items-center">
                <a href="/Single" className="text-[30px] uppercase  text-center hover:text-[#cd9a2b] transition-all duration-500 font-bold">Phòng</a>
                <div className="w-[120px] border-[0.5px] border-gray-600 mb-[1px]"></div>
                <div className="w-[120px] border-[0.5px] border-gray-600"></div>
            </div>
            <div className="xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-3 md:grid md:grid-cols-2 grid grid-cols-1  my-7 gap-5">
            {typeRooms.map((room, index) => (
                <div className="bg-white drop-shadow-md" key={index}>
                    <div className="">
                        <a href='/'><img className="w-full h-full cursor-pointer" src={`../Image/Rooms/${room.image_rooms}`}  alt=""></img></a>
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
    )
}
export default SingleRoom ;