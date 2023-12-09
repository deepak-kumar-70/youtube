import { useState } from "react";
import { videosData } from "../../Data/videoData";
import VideosComp from "../Navcomp/VideosComp/VideosComp";
const Searchpage = () => {


  return (
    <div className="cursor-pointer h-auto rounded-2xl mt-[5px]">
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(auto,1fr))] mt-5">
      {videosData.slice(0,11).filter((item=>item.duration>60)).map((video) => (
        <VideosComp
          key={video.id}
          {...video}
          textTitle={'sm'}
          textSize={'sm'}
          fontBold={'semibold'}
          flexCol={'flex-row'}
          
        />
      ))}
      </div>
    </div>
  );
};

export default Searchpage;
