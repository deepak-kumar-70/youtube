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
    <Link to="/shorts" className={`h-[500px]`}>
      <div
        onClick={() => handleShortsIndex(index)}
        className={`w-full h-${height}`}
        key={index}
        onMouseEnter={() => setIsVideoPlaying(true)}
        onMouseLeave={() => setIsVideoPlaying(false)}
      >
        <video
          src={videoUrl}
          title="YouTube Video"
          muted={true}
          ref={videoRef}
          className={`block object-cover h-full w-full inset-0 transition-all duration-2000 rounded-xl`}
        />
        <div className="flex gap-2 ">
          <div className="flex flex-col flex-wrap ">
            <Link
              href="#" className="font-[600] text-sm ">
              {title}
            </Link>
            <Link
              href="#" className="text-neutral-600 text-sm font-medium"> 12k
              views
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ShortComp;
