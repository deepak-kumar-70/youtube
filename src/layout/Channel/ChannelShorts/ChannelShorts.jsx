import { videosData } from "../../../Data/videoData"
import ShortComp from "../../../Component/Navcomp/ShortComp/ShortComp"
const ChannelShorts = () => {
  return (
    <div className="border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300 pb-9">
    <h2 className="font-bold text-xl mt-5">For You</h2>
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mt-5 ">
         {videosData.slice(0,15).filter((item=>item.duration<60)).map((video,index) => (
           <ShortComp
             key={video.id}
             index={index}
             {...video}
             textTitle={'sm'}
             textSize={'sm'}
             fontBold={'semibold'}
           />
         ))}
         </div>
    
    </div>
  )
}

export default ChannelShorts