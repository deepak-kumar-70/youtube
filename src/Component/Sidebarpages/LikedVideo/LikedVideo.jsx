import { BsThreeDotsVertical } from "react-icons/bs";
import { TfiDownload } from "react-icons/tfi";
import { FaPlay } from "react-icons/fa";
import { CiShuffle } from "react-icons/ci";
import { MdSort } from "react-icons/md";
import VideosComp from "../../Navcomp/VideosComp/VideosComp";
import { videosData } from "../../../Data/videoData";
import { useState } from "react";
const LikedVideo = () => {
  const [videos, setVideos] = useState(videosData.slice(0, 11));
  const shuffleVideos = () => {
    const shuffledVideos = [...videos];
    for (let i = shuffledVideos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledVideos[i], shuffledVideos[j]] = [
        shuffledVideos[j],
        shuffledVideos[i],
      ];
    }
    setVideos(shuffledVideos);
  };
  return (
    <div className="flex w-full">
      <div className="w-[30%]  h-[88vh]  ml-10 mt-3 ">
        <div className="fixed w-[23%] h-[85vh] rounded-2xl  overflow-hidden ">
          <style>
            {`
      .custom-gradient {
        position: relative;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, #99928E,  #5A4A44);
      }

      .custom-gradient::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top left,#6C605B,#60504B);
        z-index: -1;
      }
    `}
          </style>
          <div className="custom-gradient p-6">
            <div>
              <img
                className="rounded-xl w-full"
                src="https://i.ytimg.com/vi/aGHCyzVqfrQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATnIcA6LpneNso7IztdnoBDwrEzA"
              />
              <div className="text-3xl text-white mt-5 font-bold">
                <p>Liked Video</p>
              </div>
              <div className="text-white mt-4">
                <p>Gutaji</p>
                <div className="text-neutral-400">
                  <span>344 video</span>
                  <span>No views</span>
                  <span>Update today</span>
                </div>
                <div className="flex mt-2 cursor-pointer">
                  <div className="p-3 rounded-full bg-[rgba(255,255,255,0.1)]  mr-1">
                    <TfiDownload />
                  </div>
                  <div className="p-3 rounded-full bg-[rgba(255,255,255,0.1)] ">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="flex mt-5 cursor-pointer">
                  <div className="flex justify-center px-2  w-[150px] items-center h-10 text-black py-2 rounded-[25px] bg-white">
                    <span className="mr-4">
                      <FaPlay />
                    </span>
                    <span>Play All</span>
                  </div>
                  <div
                    onClick={shuffleVideos}
                    className="  bg-[rgba(255,255,255,0.1)] flex justify-center px-2  w-[150px] items-center text-white h-10 rounded-[25px] ml-4"
                  >
                    <span className="text-2xl">
                      {" "}
                      <CiShuffle />
                    </span>

                    <span className="ml-4">Shuffle</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[65%] ml-2">
        <div className="flex items-center text-2xl mt-8 ml-4">
          <span>
            <MdSort />
          </span>
          <span className="text-xl">sort</span>
        </div>
        <div>
          <div className="flex flex-col gap-4  mt-5">
            {videos
              .filter((item) => item.duration > 60)
              .map((video, index) => (
                <div key={video.id} className="flex items-center ">
                  <span className="text-xl mr-2 text-neutral-700 cursor-pointer">
                    <span>{index + 1}</span>
                  </span>
                  <div className="">
                  <VideosComp
                  {...video}
                  textTitle={"sm"}
                  textSize={"sm"}
                  fontBold={"semibold"}
                  flexCol={"flex-row"}
                  profile={false}
                  videoWidth={'44'}
                  videoHeight={'28'}
                />
                  </div>
                 
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedVideo;
