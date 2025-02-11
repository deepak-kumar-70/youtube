
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { PiUserRectangle } from "react-icons/pi";
import { VscHistory } from "react-icons/vsc";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { CgPlayList } from "react-icons/cg";
// Explore icon
import { IoIosArrowForward } from "react-icons/io";
import { FaFireFlameCurved } from "react-icons/fa6";
import { LuShoppingBag } from "react-icons/lu";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { PiFilmSlateFill } from "react-icons/pi";
import { IoRadioOutline } from "react-icons/io5";
import { TfiGame } from "react-icons/tfi";
import { BsNewspaper } from "react-icons/bs";
import { GoTrophy } from "react-icons/go";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { MdPodcasts } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";
import { playlists } from "../../../Data/sidebar";
import { channelDetail } from "../../../Data/sidebar";
import { useNavigate } from "react-router-dom";
const LeftSlider = () => {
    const [showAll, setShowAll] = useState(false);
    const[playlistShow,setPlaylistShow]=useState(false)
    // const[isActive,setActive]=useState(true)
    const [selectedTab, setSelectedTab] = useState("Home")
    const navigate=useNavigate()
  const visibleChannels = showAll ? channelDetail : channelDetail.slice(0, 5);
  const arrayLength = channelDetail.length - 5;
    const handleShowMoreClick = () => {
        setShowAll(true);
      };
    
      const handleShowLessClick = () => {
        setShowAll(false);
      };
      const handleTabClick = (tab) => {
        setSelectedTab(tab);
      };
  return (
    <div className="sticky top-0 overflow-y-auto scrollbar-hidden pb-4 md:flex flex-col ml-1 hidden">
    <div className=" border-b-slate-200 border-b-2  mr-5 text-[14px] cursor-pointer">
    <Link to='/'>
      <div   className={`flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 ${
        selectedTab === "Home" ? "bg-neutral-300" : ""
      }`}
      onClick={() => setSelectedTab("Home")}
      >
        <span>
          <GoHome className="text-2xl mr-7" />
        </span>
        <span>Home</span>
      </div>
      </Link>
    
      <div
      onClick={() => {
        handleTabClick('shorts');
        navigate('/shorts?video=');
      }}
       className={`flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 ${
        selectedTab === "shorts" ? "bg-neutral-300" : ""
      }`}
     
      >
        <span>
          <SiYoutubeshorts className="text-2xl mr-7" />
        </span>
        <span>Shorts</span>
      </div>
     
      <div 
      onClick={() => {
        handleTabClick('shorts');
        navigate('/subscription');
      }}
      className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 mb-3">
        <span>
          <MdOutlineSubscriptions className="text-2xl mr-7" />
        </span>
        <span>Subscriptions</span>
      </div>
    </div>

    <div className=" border-b-slate-200 border-b-2  mr-5 text-[14px]">
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 mt-3">
        <span className="mr-2 ">You</span>
        <span>
          <IoIosArrowForward />
        </span>
      </div>
      <div 
      onClick={() => {
        handleTabClick('shorts');
        navigate('/channel');
      }}
      className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 cursor-pointer">
        <span>
          <PiUserRectangle className="text-2xl mr-7" />
        </span>
        <span>Your Channel</span>
      </div>
      <div
      onClick={() => {
        handleTabClick('shorts');
        navigate('/history');
      }}
      className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 cursor-pointer">
        <span>
          <VscHistory className="text-2xl mr-7" />
        </span>
        <span>History</span>
      </div>
      <a href=''>
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200">
      <span>
        <AiOutlinePlaySquare className="text-2xl mr-7" />
      </span>
      <span>Your Video</span>
    </div>
      </a>
     
      <div 
      onClick={() => {
        handleTabClick('shorts');
        navigate('/watchlater?wantchCount=');
      }}
      className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 cursor-pointer">
      <span>
        <MdOutlineAccessTime className="text-2xl mr-7" />
      </span>
      <span>Watch Later</span>
    </div>
     
     
      {!playlistShow && (
        <div
          className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 mb-3 cursor-pointer"
          onClick={(()=>(setPlaylistShow(true)))}
        >
          <span>
            <IoIosArrowDown className="text-2xl mr-7" />
          </span>
          <span>Show  more</span>
        </div>
        )}
        { playlistShow &&
        <a href=''>
        <div 
        onClick={() => {
          handleTabClick('shorts');
          navigate('/LikedVideo?wantchCount=');
        }}
        className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 whitespace-nowrap overflow-hidden text-ellipsis">
        <span>
          <AiOutlineLike className="text-2xl mr-7" />
        </span>
        <span>Liked videos</span>
      </div>
        </a>
        }
      { playlistShow &&
     
        playlists.map((item ,index) => (
        <a href='#' key={index}>
        <div
    
      
        key={item.id} className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 whitespace-nowrap overflow-hidden text-ellipsis">
        <span>
          <CgPlayList className="text-2xl mr-7" />
        </span>
        <span>{item.name}</span>
      </div>
        </a>
      
      ))}
      { playlistShow && (
        <div
          className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 mb-3 cursor-pointer"
          onClick={(()=>(setPlaylistShow(false)))}
        >
          <span>
            <IoIosArrowUp className="text-2xl mr-7" />
          </span>
          <span>Show less</span>
        </div>
      )}
     
    </div>

    <div className=" border-b-slate-200 border-b-2 text-[14px] mr-5 scrollbar-hidden">
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 mt-3">
        <span className="mr-2 ">Subscriptions</span>
      </div>
      {visibleChannels.map((item) => (
        <div
          key={item.id}
          className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200"
        >
          <span>
            <img
              src={item.imgUrl}
              className="w-[30px] h-[30px] mr-5 rounded-full"
              alt={item.channelName}
            />
          </span>
          <span className="whitespace-nowrap overflow-hidden text-ellipsis">
            {item.channelName}
          </span>
        </div>
      ))}
      {!showAll && (
        <div
          className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 mb-3 cursor-pointer"
          onClick={handleShowMoreClick}
        >
          <span>
            <IoIosArrowDown className="text-2xl mr-7" />
          </span>
          <span>Show {arrayLength} more</span>
        </div>
      )}
      {showAll && (
        <div
          className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 mb-3 cursor-pointer"
          onClick={handleShowLessClick}
        >
          <span>
            <IoIosArrowUp className="text-2xl mr-7" />
          </span>
          <span>Show less</span>
        </div>
      )}
    </div>
    <div className=" border-b-slate-200 border-b-2 text-[14px]  mr-5">
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 ">
        <span>
          <FaFireFlameCurved className="text-2xl mr-7" />
        </span>
        <span>Trendind</span>
      </div>
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200">
        <span>
          <LuShoppingBag className="text-2xl mr-7" />
        </span>
        <span>Shopping</span>
      </div>
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 ">
        <span>
          <IoMusicalNoteOutline className="text-2xl mr-7" />
        </span>
        <span>Music</span>
      </div>
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200">
        <span>
          <PiFilmSlateFill className="text-2xl mr-7" />
        </span>
        <span>Films</span>
      </div>
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200">
        <span>
          <IoRadioOutline className="text-2xl mr-7" />
        </span>
        <span>Live</span>
      </div>
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 ">
        <span>
          <TfiGame className="text-2xl mr-7" />
        </span>
        <span>Gaming</span>
      </div>
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200">
        <span>
          <BsNewspaper className="text-2xl mr-7" />
        </span>
        <span>News</span>
      </div>
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200">
        <span>
          <GoTrophy className="text-2xl mr-7" />
        </span>
        <span>Sports</span>
      </div>
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 ">
        <span>
          <AiOutlineBulb className="text-2xl mr-7" />
        </span>
        <span>Learning</span>
      </div>
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200 whitespace-nowrap overflow-hidden text-ellipsis">
        <span>
          <GiHanger className="text-2xl mr-7" />
        </span>
        <span>Fashion & Beauty</span>
      </div>
      <div className="flex px-3 py-2 items-center w-[200px] rounded-xl hover:bg-neutral-200">
        <span>
          <MdPodcasts className="text-2xl mr-7" />
        </span>
        <span>Podcasts</span>
      </div>
    </div>


   
  </div>
  )
}

export default LeftSlider