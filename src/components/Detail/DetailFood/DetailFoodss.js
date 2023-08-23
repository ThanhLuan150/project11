import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const DetailFoodss= ()=>{ 
    const [food, setFood] = useState(null);
    const {  id_foods } = useParams();
    console.log(id_foods)
    console.log('food'+food)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const foodResponse = await axios.get(
            `http://127.0.0.1:8000/api/food/${id_foods}`
          );
          setFood(foodResponse.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchData();
    }, [id_foods]);
   
    if (!food) {
      return <p>Loading...</p>;
    }
    return(
        
    
            <div className="md:flex md:flex-row flex flex-col gap-5 py-6">
                <div className="basis-3/6">
                    <div className="">
                        <img className="w-full h-full border hover:border-[#cd9a2b] transition-all duration-500 cursor-pointer"  src={`../Image/Foods/${food.image_foods}`}></img>
                    </div>
                </div>
                <div  className="basis-3/6">
                    <div className="text-[26px] text-[#323c42] font-medium">{food.name_foods}</div>
                    <div className="text-[22px] text-[#dc3545] font-medium my-1">{food.discount_price} <del className="text-[#ACACAC] text-[16px] font-mono">{food.cost_price}</del></div> 
                    <div className="border border-[#ddd] my-3"></div>
                    <div className="text-[#333] text-[14px] font-mono">{food.discription_food}</div>
                    <div className="border border-[#ddd] my-3"></div>
                    <div className="flex md:gap-2 gap-1 flex-row py-2">
                        <div className="basis-1/6 flex flex-row">
                            <div className="">
                                <input className="outline-none w-[40px] h-[50px] border px-2 text-center border-[#ddd]" type="text"name=""  ></input>
                            </div>
                            <div className="flex flex-col ">
                                <button className="border w-[30px] border-[#ddd]" type="button">+</button>
                                <button className="border border-[#ddd]" type="button">-</button>
                            </div>
                        </div>
                        <div className="basis-5/6 pt-3" >
                            <a className="bg-[#cd9a2b] w-max text-white uppercase sm:px-10 px-3 py-3 text-[14px] font-mono hover:text-[#cd9a2b] hover:border-[#cd9a2b] hover:border hover:bg-white transition-all duration -500" href="/Cart">Thêm vào giỏ hàng</a>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default DetailFoodss ;