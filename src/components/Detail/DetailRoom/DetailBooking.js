import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailBooking = () => {
    const [room, setRoom] = useState(null);
    const { id_rooms } = useParams();
    
    // Define the function that fetches the data from API
    const fetchData = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/room/${id_rooms}`);
            setRoom(response.data);
        } catch (error) {
            console.error("Error fetching room:", error);
        }
    };

    // Trigger the fetchData after the initial render by using the useEffect hook
    useEffect(() => {
        fetchData();
    }, [id_rooms]);

    // Check if room data is still loading
    if (!room) {
        return <p>Loading...</p>;
    }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  console.log()
    return(
        
        <>
        
        <div className=" py-5" >
            <Slider {...settings}>
                  <img  src={`../../Image/Rooms/${room.image_rooms}`} alt="" className="w-[664px] h-[350px]  pr-2 cursor-pointer" />
                  <img  src={`../../Image/Rooms/${room.image_rooms}`} alt="" className="w-[664px] h-[350px]  pr-2 cursor-pointer" />
                  <img  src={`../../Image/Rooms/${room.image_rooms}`} alt="" className="w-[664px] h-[350px]  pr-2 cursor-pointer" />
                  <img  src={`../../Image/Rooms/${room.image_rooms}`} alt="" className="w-[664px] h-[350px]  pr-2 cursor-pointer" />
              </Slider>
          </div>
        <div className="lg:flex lg:flex-row gap-5 flex flex-col">
            <div className="basis-4/6">
                <div className="text-[22px] font-medium text-[#323C42] hover:text-[#cd9a2b] transition-all duration-500 cursor-pointer">{room.rooms_name}</div>
                <div className=" md:grid md:grid-cols-3  grid grid-cols-2 border border-[#cd9a2b] rounded-lg   md:gap-3 gap-0 md:px-3 px-2 py-4">
                    <div className="basis-2/6 flex gap-3 ">
                        <div className="basic-3/6">
                            <img src={`../../Image/room_services/${room.old_people_information_image}`} className="w-[26px] h-[26px]"></img>
                        </div>
                        <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">{room.old_people_information_name}</div>
                    </div>
                    <div className="basis-2/6 flex gap-3 ">
                        <div className="basic-3/6">
                            <img src={`../../Image/room_services/${room.young_people_information_image}`} className="w-[26px] h-[26px]"></img>
                        </div>
                        <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">{room.young_people_information_name}</div>
                    </div>
                    <div className="basis-2/6 flex gap-3  md:pt-0 pt-3">
                        <div className="basic-3/6">
                            <img src={`../../Image/room_services/${room.acreage_information_image}`} className="w-[26px] h-[26px]"></img>
                        </div>
                        <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">{room.acreage_information_name}</div>
                    </div>
                </div>
                <div className="font-mono text-[14px] text-[#323c42] mt-4 pb-5">{room.description}</div>
                <div className="">
                    <div className="bg-[#cd9a2b] flex justify-center py-2 px-3 border-b-0 items-end w-max text-white text-[18px] font-bold rounded-t-lg hover:bg-white border hover:border-[#cd9a2b] hover:text-[#cd9a2b] transition-all duration-500 cursor-pointer">Dịch vụ phòng</div>
                    <div className=" md:grid md:grid-cols-3  grid grid-cols-2 border border-[#cd9a2b] rounded-r-lg  md:gap-3 gap-0 md:px-3 px-2 py-4">
                        <div className="basis-2/6 flex gap-3 ">
                            <div className="basic-3/6">
                                <img src={`../../Image/room_services/${room.coffee_room_services_image}`} className="w-[26px] h-[26px]"></img>
                            </div>
                            <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">{room.coffee_room_services_name}</div>
                        </div>
                        <div className="basis-2/6 flex gap-3 ">
                            <div className="basic-3/6">
                                <img  src={`../../Image/room_services/${room.call_room_services_image}`}  className="w-[26px] h-[26px]"></img>
                            </div>
                            <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">{room.call_room_services_name}</div>
                        </div>
                        <div className="basis-2/6 flex gap-3  md:pt-0 pt-3">
                            <div className="basic-3/6">
                                <img src={`../../Image/room_services/${room.kitchen_room_services_image}`}  className="w-[26px] h-[26px]"></img>
                            </div>
                            <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">{room.kitchen_room_services_name}</div>
                        </div>
                        <div className="basis-2/6 flex gap-3 pt-3">
                            <div className="basic-3/6">
                                <img src={`../../Image/room_services/${room.bathtub_room_services_image}`}  className="w-[26px] h-[26px]"></img>
                            </div>
                            <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">{room.bathtub_room_services_name}</div>
                        </div>
                        <div className="basis-2/6 flex gap-3 pt-3">
                            <div className="basic-3/6">
                                <img src={`../../Image/room_services/${room.internet_room_services_image}`} className="w-[26px] h-[26px]"></img>
                            </div>
                            <div className="basic-3/6 md:text-[18px] text-[14px] text-[#323C42] font-mono">{room.internet_room_services_name}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="basis-2/6 bg-[#F2F2F2] rounded-lg px-4 py-2 w-full">
                <div className="text-[22px] text-[#c40025] font-medium">950.000₫/Đêm</div>
                <div className="border border-[#cd9a2b] w-full my-2"></div>
                <div className="grid grid-cols-2 gap-3">
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Họ và tên*</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full " type="text"name="" placeholder="Họ và tên"></input>
                    </div>
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Số điện thoại*</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full" type="phone"name="" placeholder="Số điện thoại"></input>
                    </div>
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Ngày nhận</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full" type="date" name="" placeholder="Họ và tên"></input>
                    </div>
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Ngày nhận</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full" type="date"name=""></input>
                    </div>
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Người lớn</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full" type="text"name="" placeholder="Người lớn"></input>
                    </div>
                    <div className="w-full">
                        <div className="text-[#333] text-[14px] font-mono my-2">Trẻ em</div>
                        <input className="border rounded-lg py-2 px-2 placeholder:text-[#6c707e] text-[14px] font-mono placeholder:font-mono text-[#6c707e] outline-none w-full" type="text"name="" placeholder="Trẻ em"></input>
                    </div>
                    <div className="py-3 ">
                        <button type="button" className="bg-[#fff] border border-[#000000] w-full px-2 py-2 uppercase font-bold text-[16px] rounded-lg text-[#000000] hover:bg-[#000000] hover:text-white transition-all duration-500">Tạm tính</button>
                    </div>
                    <div className=" py-3">
                        <a href="/Booking" type="button" className="bg-[#cd9a2b] w-full px-4 py-2 uppercase font-bold text-[16px] text-center  rounded-lg text-white hover:bg-white border hover:border-[#cd9a2b] hover:text-[#cd9a2b] transition-all duration-500">Đặt phòng</a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default DetailBooking ;
