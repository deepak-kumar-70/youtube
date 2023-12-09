
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TfiDownload } from "react-icons/tfi";
import { FaPlay } from "react-icons/fa";
import { CiShuffle } from "react-icons/ci";
import { MdSort } from "react-icons/md";
import { IoReorderTwoSharp } from "react-icons/io5";
import VideosComp from "../../Navcomp/VideosComp/VideosComp";
import { videosData } from "../../../Data/videoData";

const VideoDraggable = ({ video, index, moveVideo }) => {
  const [, ref] = useDrag({
    type: "VIDEO",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "VIDEO",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveVideo(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div className="flex items-center" ref={(node) => ref(drop(node))}>
      <span className="text-3xl mr-2 text-neutral-700 cursor-grab">
        <IoReorderTwoSharp />
      </span>
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
  );
};

const WatchLater = () => {
  const [videos, setVideos] = React.useState(videosData.slice(0, 11));
  const shuffleVideos = () => {
    const shuffledVideos = [...videos];
    for (let i = shuffledVideos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledVideos[i], shuffledVideos[j]] = [shuffledVideos[j], shuffledVideos[i]];
    }
    setVideos(shuffledVideos);
  };
  const moveVideo = (fromIndex, toIndex) => {
    const updatedVideos = [...videos];
    const [movedVideo] = updatedVideos.splice(fromIndex, 1);
    updatedVideos.splice(toIndex, 0, movedVideo);
    setVideos(updatedVideos);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex w-full">
      <div className="w-[30%]  h-[88vh]  ml-10 mt-3 ">
        <div className="fixed w-[23%] h-[85vh] rounded-2xl  overflow-hidden ">
        <style>
        {`
      .custom-gradient {
        position: relative;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at center, #0E3932,  #0D594B);
      }

      .custom-gradient::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to top left, #3E655E, #0C594A);
        z-index: -1;
      }
    `}
      </style>
      <div className="custom-gradient   p-6">
        <div>
          <img
            className="rounded-xl w-full"
            src="https://i.ytimg.com/vi/aGHCyzVqfrQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATnIcA6LpneNso7IztdnoBDwrEzA"
          />
          <div className="text-3xl text-white mt-5 font-bold">
            <p>Watch Later</p>
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
              <div className="flex justify-center px-2  w-[150px] items-center h-10 text-black py-2 rounded-[25px] bg-white ">
                <span className="mr-4">
                  <FaPlay />
                </span>
                <span>Play All</span>
              </div>
              <div
              onClick={shuffleVideos}
              className="  bg-[rgba(255,255,255,0.1)] flex justify-center px-2  w-[150px] items-center text-white h-10 rounded-[25px] ml-4">
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
        <div className="w-[65%] ml-2 overflow-auto ">
          <div className="flex items-center text-2xl mt-8 ml-4">
            <span>
              <MdSort />
            </span>
            <span className="text-xl">sort</span>
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(auto,1fr))] mt-5">
            {videos.filter((item) => item.duration > 60).map((video, index) => (
              <VideoDraggable
                key={video.id}
                video={video}
                index={index}
                moveVideo={moveVideo}
               
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default WatchLater;
