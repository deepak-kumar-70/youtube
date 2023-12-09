import { videosData } from "../../../Data/videoData"
import ShortComp from "../../Navcomp/ShortComp/ShortComp"
import VideosComp from "../../Navcomp/VideosComp/VideosComp"

const Subsription = () => {
  return (
    <div className="ml-10">
    <div className="border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300 pb-9">
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(auto,1fr))] mt-5">
    {videosData.slice(0,1).filter((item=>item.duration>60)).map((video) => (
        <div   key={video.id}> 
         <div className="flex gap-3 items-center ">
         <img 
         className="h-12 w-12 rounded-full"
         src='https://yt3.ggpht.com/ytc/APkrFKZUsJhMFbLR3F9t3-uWErufcVlPQbe2Kg0OFRKKPw=s88-c-k-c0x00ffffff-no-rj'
         />
         <h2 className="font-bold text-xl ">For You</h2> 
         </div> 
        <VideosComp
        
          {...video}
          textTitle={'sm'}
          textSize={'sm'}
          fontBold={'semibold'}
          flexCol={'flex-row'}
          profile={false}
          videoWidth={'44'}
          videoHeight={'32'}
        />
        </div>
     
    ))}
    </div>
  </div>
  <div className="border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300 pb-9">
        <div  > 
         <div className="flex gap-3 items-center ">
         <img 
         className="h-12 w-12 rounded-full"
         src='https://yt3.ggpht.com/ytc/APkrFKZUsJhMFbLR3F9t3-uWErufcVlPQbe2Kg0OFRKKPw=s88-c-k-c0x00ffffff-no-rj'
         />
         <h2 className="font-bold text-xl ">For You</h2> 
         </div> 
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
  </div>
  <div className="border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300 pb-9">
  <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(auto,0fr))] mt-5">
  {videosData.slice(0,9).filter((item=>item.duration>60)).map((video) => (
      <div   key={video.id}> 
       <div className="flex gap-3 items-center mb-3">
       <img 
       className="h-12 w-12 rounded-full"
       src='https://yt3.ggpht.com/ytc/APkrFKZUsJhMFbLR3F9t3-uWErufcVlPQbe2Kg0OFRKKPw=s88-c-k-c0x00ffffff-no-rj'
       />
       <h2 className="font-bold text-xl ">{video.channel.name}</h2> 
       </div> 
      <VideosComp
      
        {...video}
        textTitle={'sm'}
        textSize={'sm'}
        fontBold={'semibold'}
        flexCol={'flex-row'}
        profile={false}
        videoWidth={'44'}
        videoHeight={'32'}
      />
      </div>
   
  ))}
  </div>
</div>
    </div>
  )
}

export default Subsription