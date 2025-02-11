import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";
import Upload from "../../Navcomp/Upload/Upload";
import ResponsieUpload from "../../Navcomp/Upload/ResponsieUpload";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleIsUpload } from "../../../Redux/Slices/ShortIndexSlice/ShortSlice";
const BottomNavigator = () => {
   
    const isUpload=useSelector((state)=>state.isUploade)
    const dispatch=useDispatch()
  return (
    <div className=" flex items-center  z-50 text-[14px] bg-white w-[100vw] justify-between px-2 py-1">
      <Link to="/">
        <div
          className={`flex flex-col  justify-center items-center w-[calc(100vw/6)]  `}
        >
          <span>
            <GoHome className="text-xl mb-1 justify-center " />
          </span>
          <span className="text-[10px]">Home</span>
        </div>
      </Link>
      <Link to="/shorts">
        <div
          className={`flex flex-col  justify-center items-center w-[calc(100vw/6)]  `}
        >
          <span>
            <SiYoutubeshorts className="text-xl mb-1" />
          </span>
          <span className="text-[10px]">Shorts</span>
        </div>
      </Link>
      <Link to="" onClick={()=>dispatch(handleIsUpload())}>
        <div
          className={`flex   justify-center items-center  w-[calc(100vw/5)] `}
        >
          <span>
            <IoIosAddCircleOutline className="text-4xl mb-1 font-thin" />
          </span>
        </div>
      </Link>
      <div>
      {
        isUpload &&
        <ResponsieUpload/>
      }
    
      </div>
      <Link>
        <div className="flex flex-col  justify-center items-center  w-[calc(100vw/6)]  ">
          <span>
            <MdOutlineSubscriptions className="text-xl mb-1" />
          </span>
          <span className="text-[10px]">Subscriptions</span>
        </div>
      </Link>
      <Link to="">
        <div className="flex flex-shrink-0 flex-col items-center w-[calc(100vw/6)]">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
            className="w-7 object-cover aspect-square cursor-pointer  rounded-full mb-1"
          />
          <span className="text-[10px]">You</span>
        </div>
      </Link>
    </div>
  );
};

export default BottomNavigator;
