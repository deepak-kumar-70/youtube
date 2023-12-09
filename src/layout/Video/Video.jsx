
import { Link } from 'react-router-dom';
import { videosData } from '../../Data/videoData';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { handleHomevideoIndex, handleShortIndex } from '../../Redux/Slices/ShortIndexSlice/ShortSlice';
const Video = () => {
    const[play,setPlay]=useState(true)
    const[isplay,setIsPlay]=useState(true)
    const[videoIndex,setIndex]=useState()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const isSlide=useSelector((state)=>state.isSlide)
    const handleEnter=(index)=>{
     
      setTimeout(() => {
        setPlay(false)
      }, 2000);
      setIsPlay(true);
      setIndex(index)
    }
    const handleLeave=()=>{
        setPlay(true)
        setIsPlay(false)
    }
    const handleIndexOtherpage=(index)=>{
      dispatch(handleHomevideoIndex(index))
      navigate('/videoplay')
    }
    const handleShortsIndex=(index)=>{
      dispatch(handleShortIndex(index))
    }
  return (
    <div className="mt-4 ml-3">
    <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] ">
    {videosData.slice(isSlide ? 0 : 0, isSlide ? 6 : 8).map((videoItem,index)=>{
   return(
        <div key={index}  onClick={()=>handleIndexOtherpage(videoItem.id)} className="cursor-pointer  h-220px" onMouseEnter={(()=>handleEnter(index))} onMouseLeave={handleLeave}>
        { 
            play?(
                <img src={videoItem.thumbnailUrl}  className={`block   rounded-xl h-[220px] object-cover transition-[border-radius] duration-2000 ${
                    !play ? "rounded-none" : "rounded-xl"
                  }`}/>
            ):(videoIndex===index?(
                <video
                src={videoItem.videoUrl}
                title="YouTube Video"
                autoPlay={isplay}
                muted={true}
                className={`block object-cover h-[220px] w-full inset-0 transition-all duration-2000 ${
                    !play ? "opacity-100 delay-2000" : "opacity-0"
                  }`}
              />
            ): <img src={videoItem.thumbnailUrl} className={`block   h-[220px] object-cover transition-[border-radius] duration-2000 ${
                play ? "rounded-none" : "rounded-xl"
              }`}/>
               
            ) 
       
     }
        <div className="flex gap-2 ">
          <a href="#" className="flex-shrink-0">
            <img
              className="w-12 h-12 rounded-full"
              src={videoItem.channel.profileUrl}
            />
          </a>
          <div className="flex flex-col flex-wrap ">
            <a href="#" className={`font-bold w-full ${isSlide?null:'text-sm'}`}>
             {videoItem.title}
            </a>
            <a href="#" className="text-neutral-600 text-sm font-medium">
            {videoItem.channel.name}
            </a>
           <div className="flex"> <div className="text-neutral-600 text-sm font-medium">23lakh views</div> <div className="text-neutral-600 text-sm ml-1 font-medium"> . 3months ago</div></div>
          </div>
        </div>
      </div> 
      
  )})}
  </div>
 <Link to='/shorts'>
  <div className="mt-10 grid gap-3 grid-cols-[repeat(auto-fill,minmax(195px,1fr))] mb-10 cursor-pointer">
  {
   videosData.slice(isSlide ? 0 : 0, isSlide ? 5 : 6).map((item,index)=>{
      return(
      <div onClick={()=>handleShortsIndex(index)} className="w-full h-[400px] " key={index}>
      <video
      src={item.videoUrl}
      title="YouTube Video"
      muted={true}
      autoPlay={false}
      className={`block object-cover h-full w-full inset-0 transition-all duration-2000 rounded-xl`}
    />
    <div className="flex gap-2 ">
          <div className="flex flex-col flex-wrap ">
            <a href="#" className="font-[600] text-sm w-[210px]">
             {item.title}
            </a>
            <a href="#" className="text-neutral-600 text-sm font-medium">
           12k views
            </a>
          
          </div>
        </div>
       
      </div>
    
      )
    })
  }
  </div>
  </Link>
    </div>
  );
};

export default Video;
