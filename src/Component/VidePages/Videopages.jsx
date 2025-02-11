/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { LiaDownloadSolid } from "react-icons/lia";
import { BsThreeDots } from "react-icons/bs";
import  Categories from "../categories/categories";
import { useState } from "react";
import { videosData } from "../../Data/videoData";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import VideosComp from "../Navcomp/VideosComp/VideosComp";
import VideoComments from "../Navcomp/Comments/VideoComments";
import Description from "../Comp/Description/Description";
import PlayButton from "../Comp/Buttons/PlayButton";
import PauseButton from "../Comp/Buttons/PauseButton";
const Videopages = () => {
    const[sliderIndex,setSliderIndex]=useState(videosData[0].videoUrl)
    const[playVideo,setPlayVideo]=useState(true)
    const videoRef = useRef(null);
    const homeIndex=useSelector((state)=>state.homeVideoIndex)
    console.log(homeIndex,'hoem')
    const newVideoId=videosData.find(objId=>objId?.id===homeIndex)
    console.log(newVideoId)

  useEffect(()=>{
    if(newVideoId==null){
      setSliderIndex(videosData[0].videoUrl)
      console.log(videosData[0])
      console.log('error')
     }else{
      setSliderIndex(newVideoId.videoUrl)
     }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  },[newVideoId])
 
  const handleDownload = () => {
    const videoElement = videoRef.current;
    const a = document.createElement('a');
    a.href = videoElement.src;
    a.download = 'downloaded_video.mp4';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Share Video",
          text: "Check out this video!",
          url: window.location.href,
        });
      } else {
        alert("Share functionality is not supported on this browser.");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };
   
  return (
    <div className="flex items-center justify-center ">
      <div className="w-[85%] flex flex-col sm:flex-row">
        <div className="mr-10">
          <div className="cursor-pointer w-[55vw] h-[70vh] rounded-2xl  bg-neutral-900">
            <video
              src={sliderIndex}
              title="YouTube Video"
              ref={videoRef}
              autoPlay={playVideo}
              muted={false}
              controls
              className={`relative block object-cover h-full w-full inset-0 transition-all duration-2000   rounded-2xl`}
              onClick={()=>setPlayVideo(!playVideo)}
            />
              {
                playVideo ?
                <div  onClick={()=>setPlayVideo(!playVideo)} className="absolute z-50 top-[30%] left-[33%]"><PlayButton/></div>:
                <div  onClick={()=>setPlayVideo(!playVideo)} className="absolute z-50 top-[30%] left-[33%]"><PauseButton/></div>
              } 
            <div className="">
              <div className="flex flex-col flex-wrap ">
                <Link href="#" className="font-bold w-[55vw] mt-3">
                🧑🏻Day 1 | JS, Life, Attitude, Interview & Perspective |
                  Sheryians Coding School
                </Link>
              </div>
              <div className="mt-3 flex">
                <div className="flex">
                  <Link href="#">
                    <img
                      className="w-12 h-12 rounded-full"
                      src="https://yt3.ggpht.com/M8HHa-4HpA1tPBYyCclC5JmODA7vx77XryhQe_0_4L9bCfpYwiDr7uJc3bOb9UZKJpogSC9OvA=s88-c-k-c0x00ffffff-no-rj"
                    />
                  </Link>
                  <div className="ml-3">
                    <Link
                      href="#"
                      className="text-neutral-900 text-sm font-bold"
                    >
                      Sheryians Coding School
                    </Link>
                    <div className="text-neutral-600 text-sm font-medium">
                      23lakh Subscribe
                    </div>
                  </div>
                  <div>
                    <button className="px-4 py-[8px] rounded-[30px] bg-black text-white ml-6">
                      Subscribe
                    </button>
                  </div>
                </div>
                <div>
                  <div className="flex ml-[80px] items-center justify-center  text-sm font-thin">
                    <div className="flex cursor-pointer items-center ">
                      <div className="flex border-r-2 border-r-slate-300  hover:bg-neutral-200  py-1 px-3 rounded-l-full  bg-neutral-100">
                        <span>
                          {" "}
                          <BiLike className="text-2xl mr-2 " />
                        </span>
                        <span>1.45k</span>
                      </div>
                      <div className="flex  hover:bg-neutral-200  py-[4px] px-3 rounded-r-full  bg-neutral-100">
                        <span>
                          {" "}
                          <BiDislike className="text-2xl ml-2" />
                        </span>
                      </div>
                    </div>
                    <div 
                    onClick={handleShare}
                    className="flex items-center ml-2  hover:bg-neutral-200  py-1 px-3 rounded-full  bg-neutral-100">
                      <span>
                        {" "}
                        <RiShareForwardLine className="text-2xl mr-2" />
                      </span>
                      <span>share</span>
                    </div>
                    <div onClick={handleDownload} className="flex items-center ml-2  hover:bg-neutral-200  py-1 px-3 rounded-full  bg-neutral-100">
                      <span>
                        {" "}
                        <LiaDownloadSolid className="text-2xl mr-2" />
                      </span>
                      <span>Download</span>
                    </div>
                    <div className="flex items-center justify-center ml-2  hover:bg-neutral-200  h-[40px] w-[40px] rounded-full  bg-neutral-100">
                      <span>
                        {" "}
                        <BsThreeDots className="text-2xl " />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           <div><Description/></div>
            <div className="w-full mt-6"><VideoComments/></div>
          </div>
         
        </div>
        <div className="cursor-pointer w-[32%] h-auto rounded-2xl mt-[5px]">

        <div className="mb-4">
        <Categories/>
        </div>
      
        <div>
        <div className="grid gap-4  grid-cols-[repeat(auto-fill,minmax(auto,0fr))] mt-5">
        {videosData.slice(0,11).filter((item=>item.duration>60)).map((video) => (
          <VideosComp
            key={video.id}
            {...video}
            flexCol={'flex-row'}
            textTitle={'sm'}
            textSize={'sm'}
            fontBold={'semibold'}
            profile={false}
          />
        ))}
        </div>
        
        </div>
        
        
        </div>
      </div>
    </div>
  );
};

export default Videopages;
