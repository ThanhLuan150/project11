import DouleRoom from "./Double room";
import VipRoom from "./VIP room";
import SingleRoom from "./single room";

const Room = ()=>{ 
    return(
        
        <>
        <div className="bg-[#f8f9fa] pb-10">
            <SingleRoom/>
            <DouleRoom/>
            <VipRoom/>
        </div>

        </>
    )
}
export default Room ;