/* eslint-disable react/prop-types */

import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
function VideoComp({
  id,
  title,
  thumbnailUrl,
  videoUrl,
  textTitle,
  textSize,
  fontBold
}) {
  
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current === null) return;

    if (isVideoPlaying) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div
      className="flex flex-col gap-2"
      onMouseEnter={() => setIsVideoPlaying(true)}
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <Link to={`/videoPlay?v=${id}`} className="relative aspect-video">
        <img
          src={thumbnailUrl}
          className={`block w-full h-full object-cover transition-[border-radius] duration-200 ${
            isVideoPlaying ? "rounded-none" : "rounded-xl"
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
      <div className="flex gap-2">
        <div className="flex flex-col">
          <Link to={`/videoPlay?v=${id}`} className={`font-${fontBold} text-neutral-800 text-${textTitle}`}>
            {title}
          </Link>
          <div className={`text-neutral-600 text-${textSize} mt-1`}>
            {`${'122k'} Views • ${'2 months ago'}`} 
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoComp;



