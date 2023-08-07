const DetailFoodss= ()=>{ 
    return(
        
    
            <div className="md:flex md:flex-row flex flex-col gap-5 py-6">
                <div className="basis-3/6">
                    <div className="">
                        <img className="w-full h-full border hover:border-[#cd9a2b] transition-all duration-500 cursor-pointer" src="https://bizweb.dktcdn.net/100/472/947/products/sp3c.jpg?v=1670338561717"></img>
                    </div>
                    <div className="flex flex-row gap-2 lg:pr-[200px] pr-[100px] py-3 m-auto">
                        <div className="">
                            <img className="border hover:border-[#cd9a2b] transition-all duration-500 cursor-pointer" src="https://bizweb.dktcdn.net/thumb/medium/100/472/947/products/sp3c.jpg?v=1670338561717"></img>
                        </div>
                        <div className="">
                            <img  className="border hover:border-[#cd9a2b] transition-all duration-500 cursor-pointer"  src="https://bizweb.dktcdn.net/thumb/medium/100/472/947/products/sp1c.jpg?v=1670338561717"></img>
                        </div>
                        <div className="">
                            <img className="border hover:border-[#cd9a2b] transition-all duration-500 cursor-pointer"  src="https://bizweb.dktcdn.net/thumb/medium/100/472/947/products/sp2c.jpg?v=1670338561717"></img>
                        </div>
                    </div>
                </div>
                <div  className="basis-3/6">
                    <div className="text-[26px] text-[#323c42] font-medium">Mì Xào Bò</div>
                    <div className="text-[22px] text-[#dc3545] font-medium my-1">80.000₫ <del className="text-[#ACACAC] text-[16px] font-mono">100.000₫</del></div> 
                    <div className="border border-[#ddd] my-3"></div>
                    <div className="text-[#333] text-[14px] font-mono">Đĩa mì xào thơm ngon nóng hổi sẽ cung cấp bữa sáng tuyệt vời, đầy đủ dinh dưỡng, năng lượng cho một ngày dài. Sự hòa quyện vị ngọt tự nhiên của rau củ, thịt và gia vị sẽ giúp món mì thêm đậm đà, đượm vị.</div>
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