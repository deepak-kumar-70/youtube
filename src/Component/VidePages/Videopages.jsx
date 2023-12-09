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
import VideosComp from "../Navcomp/VideosComp/VideosComp";
const Videopages = () => {
    const[sliderIndex,setSliderIndex]=useState(videosData[0].videoUrl)
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
 
     
   
   
  return (
    <div className="flex items-center justify-center ">
      <div className="w-[85%] flex">
        <div className="mr-10">
          <div className="cursor-pointer w-[55vw] h-[70vh] rounded-2xl  bg-neutral-900">
            <video
              src={sliderIndex}
              title="YouTube Video"
              autoPlay={true}
              muted={true}
            controls
              className={`block object-cover h-full w-full inset-0 transition-all duration-2000   rounded-2xl`}
            />

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
                    <div className="flex items-center ml-2  hover:bg-neutral-200  py-1 px-3 rounded-full  bg-neutral-100">
                      <span>
                        {" "}
                        <RiShareForwardLine className="text-2xl mr-2" />
                      </span>
                      <span>share</span>
                    </div>
                    <div className="flex items-center ml-2  hover:bg-neutral-200  py-1 px-3 rounded-full  bg-neutral-100">
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
            <div className=" h-auto bg-slate-200 rounded-xl mt-2 p-3">
            <p></p>
            <p>
            Welcome to Sheryians Coding School's transformative journey! 🚀 Join us for "7 Days Discipline" where we master JavaScript, cultivate a winning attitude, ace interviews, and shift perspectives. Elevate your coding game and life in just one week! 🌟

            </p>
            
            </div>
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
