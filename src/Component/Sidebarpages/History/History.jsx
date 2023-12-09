import { videosData } from "../../../Data/videoData";
import VideosComp from "../../Navcomp/VideosComp/VideosComp";
import ShortComp from "../../Navcomp/ShortComp/ShortComp";
import { IoIosSearch } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoPauseOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
const History = () => {
  return (
    <div className="ml-10 flex">
    
      <div className="flex-1 overflow-y-auto">
        <h2 className="font-bold text-3xl mt-2 mb-2 font-sans-serif">Watch history</h2>
        <h2 className="font-bold text-xl mt-8 mb-6 font-sans-serif">Today</h2>
        <div className="border-b-[1px] border-b-slate-300 pb-9">
          <div>
            <div className="flex gap-3 items-center">
              <img
                className="h-12 w-12 rounded-full"
                src="https://yt3.ggpht.com/ytc/APkrFKZUsJhMFbLR3F9t3-uWErufcVlPQbe2Kg0OFRKKPw=s88-c-k-c0x00ffffff-no-rj"
                alt="Profile"
              />
              <h2 className="font-bold text-xl ">For You</h2>
            </div>
            <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(190px,1fr))] mt-5  ">
              {videosData
                .slice(0, 5)
                .filter((item) => item.duration < 60)
                .map((video, index) => (
                  <ShortComp
                    key={video.id}
                    index={index}
                    {...video}
                    textTitle={'sm'}
                    textSize={'sm'}
                    fontBold={'semibold'}
                    height={'[400px]'}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(600px,0fr))] mt-5">
          {videosData
            .slice(0, 11)
            .filter((item) => item.duration > 60)
            .map((video) => (
              <VideosComp
                key={video.id}
                {...video}
                textTitle={'sm'}
                textSize={'sm'}
                fontBold={'semibold'}
                flexCol={'flex-row'}
                profile={false}
              />
            ))}
        </div>
      </div>

      <div className=" w-[40%] h-full -z-40 fixed top-0 right-0 flex justify-center items-center ">
       <div>
       <div 
       className="border-b-[1px]
        border-b-neutral-600 px-1 flex items-center justify-start
         focus:border-b-neutral-900 focus:border-b-[1px]"
       >
       <div className="text-2xl mr-2 text-neutral-600"><IoIosSearch/></div>
       <input
       className="outline-none p-2 "
       placeholder="search watch history"
       />
       </div>
       <div 
       className="px-2 py-2 cursor-pointer rounded-3xl hover:bg-neutral-300 flex gap-4 items-center mt-3"
       ><span className="ml-2"><RiDeleteBin6Line/></span><span>Clear all watch history</span></div>
       <div 
       className="px-2 py-2 cursor-pointer rounded-3xl hover:bg-neutral-300 flex gap-4 items-center mt-3"
       ><span className="ml-2"><IoPauseOutline/></span><span>Pause watch history</span></div>
       <div 
       className="px-2 py-2 cursor-pointer rounded-3xl hover:bg-neutral-300 flex gap-4 items-center mt-3"
       ><span className="ml-2"><IoSettingsOutline/></span><span>Manage all history</span></div>
       <div className="mt-2 text-neutral-700 ml-12">Comments</div>
       <div className="mt-2 text-neutral-700 ml-12">Comminity posts</div>
       <div className="mt-2 text-neutral-700 ml-12">Live chat</div>
       </div>
       
      </div>
    </div>
  );
};

export default History;
