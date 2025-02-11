/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleShortIndex } from "../../../Redux/Slices/ShortIndexSlice/ShortSlice";
function ShortComp({
  id,
  title,
  index,
  videoUrl,
  channel,
  textTitle,
  textSize,
  fontBold,
  height='[400px]',
  width='full'
}) {
   
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);
  console.log(index,'index')
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
  const handleShortsIndex=(index)=>{
    dispatch(handleShortIndex(index))
  }
  return (
    <Link to="/shorts" className={` md:h-[500px] aspect-[0.65] md:aspect-auto md:w-auto  w-[47%] relative overflow-hidden`}>
      <div
        onClick={() => handleShortsIndex(index)}
        className={` w-${width} md:h-[400px]  h-full`}
        key={index}
        onMouseEnter={() => setIsVideoPlaying(true)}
        onMouseLeave={() => setIsVideoPlaying(false)}
      >
        <video
          src={videoUrl}
          title="YouTube Video"
          muted={true}
          ref={videoRef}
          className={`block object-cover h-full w-full inset-0 transition-all duration-2000 rounded-xl `}
        />
        <div className="flex gap-2 ">
        <div className="flex flex-col flex-wrap w-full h-[50px] md:static absolute top-[80%] p-1  overflow-hidden">
        <Link
          href="#"
          className="font-[600] text-xs md:text-sm text-white md:text-black overflow-hidden overflow-ellipsis"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
          }}
        >
        {title}
        </Link>
        <Link
          href="#"
          className="text-neutral-600 text-xs md:text-sm font-medium md:block hidden"
        >
          12k views
        </Link>
      </div>
      
        </div>
      </div>
    </Link>
  );
}

export default ShortComp;
