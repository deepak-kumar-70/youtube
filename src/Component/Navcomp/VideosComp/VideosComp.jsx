/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleHomevideoIndex } from "../../../Redux/Slices/ShortIndexSlice/ShortSlice";
function VideosComp({
  id,
  title,
  thumbnailUrl,
  videoUrl,
  channel,
  textTitle,
  textSize,
  fontBold,
  flexCol='flex-col',
  profile=true,
  videoWidth,
  videoHeight,
}) {
    
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
const dispatch=useDispatch()
  useEffect(() => {
    if (videoRef.current === null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);
  const handleIndexOtherpage=(id)=>{
    dispatch(handleHomevideoIndex(id))
    console.log(id,'id')
   
  }
  return (
    <div
      className={`flex ${flexCol} gap-2`}
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <Link to={`/videoplay?v=${id}`} onClick={()=>handleIndexOtherpage(id)} className={`w-${videoWidth} h-${videoHeight} relative aspect-video`}>
        <img
          src={thumbnailUrl}
          className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${
            isVideoPlaying ? "rounded-none" : "rounded-none md:rounded-xl"
          }`}
        />
        <div className="absolute bottom-1 right-1 bg-[rgba(0,0,0,0.7)] text-neutral-200 text-sm px-0.5 rounded">
          {'12:00'} 
        </div>
        <video
          className={`block h-full object-cover absolute inset-0 transition-opacity duration-200 ${
            isVideoPlaying ? "opacity-100 delay-200" : "opacity-0"
          }`}
          ref={videoRef}
          muted
          playsInline
          src={videoUrl}
        />
      </Link>
      <div className="flex gap-2  w-full">
      {
        profile &&   <Link to={`/channel?=@${channel.id}`} className="flex-shrink-0">
        <img className="md:w-12 md:h-12 w-8 h-8 rounded-full" src={channel.profileUrl} />
      </Link>
      }
    
        <div className="flex flex-col w-full">
      
          <Link to={`/watch?v=${id}`} className={`font-${fontBold} text-neutral-800 text-${textTitle} ` }>
            {title}
          </Link> 
          <Link to={`/channel?=@${channel.id}`} className={`text-neutral-700 font-${fontBold} md:text-sm text-xs`}>
          {channel.name}
        </Link>
          <div className={`text-neutral-600 md:text-${textSize} text-xs mt-1 mb-5 md:mb-0`}>
            {`${'122k'} Views • ${'2 months ago'}`} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideosComp;



