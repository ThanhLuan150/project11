import DouleRoom from "./Double room";
import SingleRoom from "./single room";

const Room = ()=>{ 
    return(
        
        <>
        <div className="bg-[#f8f9fa] py-6">
            <SingleRoom/>
            <DouleRoom/>
        </div>

        </>
    )
}
export default Room ;