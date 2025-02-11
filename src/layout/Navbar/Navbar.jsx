/* eslint-disable react/prop-types */
import "regenerator-runtime/runtime";
import { IoIosSearch } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import { RiVideoUploadLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { RiVideoUploadFill } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

import "../../css/animation.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";
import { Link } from "react-router-dom";
import { videosData } from "../../Data/videoData";
import { useDispatch } from "react-redux";
import {
  handleIsUpload,
  handleSpeech,
} from "../../Redux/Slices/ShortIndexSlice/ShortSlice";
import { useSelector } from "react-redux";
import HeaderFirstSection from "../../Component/Navcomp/Headerfirstsection/HeaderFirstSection";
import Upload from "../../Component/Navcomp/Upload/Upload";
import Profile from "../../Component/Navcomp/Profile/Profile";
import Notification from "../../Component/Navcomp/Notification/Notification";
const Navbar = () => {
  const {
    transcript,
    listening,

    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  // const [isUpload, setUpload] = useState(false);
  const [isProfile, setProfile] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [showSearchBox, setShoeSearchBox] = useState(false);
  const [isnotification,setNotification]=useState(false)
  const dispatch = useDispatch();
  const isSpeechShow = useSelector((state) => state.isSpeechShow);
  const isSlide = useSelector((state) => state.isSlide);
  const isUpload = useSelector((state) => state.isUploade);
  const loginstatus = useSelector((state) => state.loginStatus);
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser support speech recognition.</span>;
  }
  const micStyle = {
    animation: listening
      ? transcript == ""
        ? null
        : "borderChange 2s ease-in-out infinite alternate"
      : "none",
    "@keyframes borderChange": {
      from: {
        boxShadow: `0 0 0 2px rgba(0, 0, 0, 0.3)`,
      },
      to: {
        boxShadow: "0 0 0 10px rgba(0, 0, 0, 0.3)",
      },
    },
  };

  const handleShowSpeech = () => {
    if (isSpeechShow) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening();
    }
    dispatch(handleSpeech(!isSpeechShow));
    if (transcript) {
      setSearchVal(transcript);
    }
  };
  const handleShowSearchBox = () => {
    setShoeSearchBox(!showSearchBox);
  };
  const filteredVideos = videosData.filter((val) => {
    if (!searchVal) {
      return true;
    } else {
      return (
        val.category &&
        val.category.some(
          (cat) => cat && cat.toLowerCase().startsWith(searchVal.toLowerCase())
        )
      );
    }
  });
  // const handleSlideVideo=()=>{
  //   dispatch(handleIsVideoSlide())
  // }

  return (
    <div className="flex justify-between md:px-10 px-3  max-w-full w-full md:py-5 py-[20px]  relative">
      <HeaderFirstSection />

      <div className="md:flex items-center hidden">
        <div className="flex  flex-grow md:w-[600px]  relative ">
          <input
            type="search"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
            placeholder="search"
            onClick={handleShowSearchBox}
            className="rounded-l-full border  
             border-neutral-400 shadow-inner shadow-neutral-100 py-1 px-4 text-lg w-full
              focus:border-blue-500 outline-none"
          />
          {(showSearchBox || searchVal !== "") && (
            <div className="w-[90%] bg-white shadow shadow-neutral-700 h-[60vh] top-10 rounded-xl absolute z-50 py-7 ">
              {filteredVideos.slice(0, 9).map((item, index) => (
                <ul key={index}>
                  <li className="hover:bg-neutral-200 cursor-pointer flex py-2">
                    <span>
                      <IoIosSearch className="text-2xl text-neutral-700 font-medium ml-3 mr-3" />
                    </span>
                    <span className="font-medium text-sm">
                      {item.category.join(" ")}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          )}

          <Link
            to="/searchpage"
            className="flex items-center justify-center py-1 bg-neutral-100 px-4 rounded-r-full border-neutral-400 border border-l-0 flex-shrink-0 hover:bg-neutral-200 cursor-pointer"
          >
            {" "}
            <span>
              <IoIosSearch className="text-2xl" />
            </span>
          </Link>
        </div>
        <div
          onClick={handleShowSpeech}
          className=" bg-neutral-200 rounded-full p-2 ml-6 hover:bg-neutral-300 cursor-pointer "
        >
          <IoMdMic className="text-xl " />
        </div>
        {isSpeechShow ? (
          <div className="bg-[#fff]  h-[60vh] w-[39vw] absolute shadow-2xl shadow-[rgba(0,0,0,0.5)] z-[10000] top-[10px] left-[29%] flex items-end justify-center">
            <h2
              className={`absolute bottom-[78%] left-[5%] text-2xl ${
                transcript.length === 0
                  ? "text-neutral-900"
                  : "text-neutral-700"
              }`}
            >
              {listening
                ? transcript == ""
                  ? "Listening..."
                  : transcript
                : listening
                ? null
                : "Didn't hear that. Try again. "}
            </h2>
            <div
              onClick={
                listening
                  ? SpeechRecognition.stopListening
                  : SpeechRecognition.startListening
              }
              className={`rounded-full p-4 ml-6  cursor-pointer z-40 absolute bottom-[15%] ${
                listening ? "bg-red-600" : "bg-neutral-300"
              }`}
              style={micStyle}
            >
              <IoMdMic
                className={`text-4xl ${
                  listening ? "text-[#fff]" : "text-black"
                }`}
              />
            </div>
            <div className="mb-7 text-[rgba(0,0,0,.8)]">
              {!listening ? "Tap the microphone to try again" : null}
            </div>
            <div
              onClick={handleShowSpeech}
              className=" rounded-full p-3 ml-6 hover:bg-neutral-300 cursor-pointer absolute bottom-[80%] left-[85%]"
            >
              <RxCross1 className="text-2xl " />
            </div>
          </div>
        ) : null}
      </div>
      {loginstatus ? (
        <div className="flex items-center ">
          <div
            onClick={() => dispatch(handleIsUpload())}
            className="md:flex items-center hidden relative justify-center mr-6 text-lg font-thin cursor-pointer w-9 h-9 rounded-full hover:bg-neutral-200 p-2"
          >
            {isUpload ? (
              <RiVideoUploadFill className="text-2xl" />
            ) : (
              <RiVideoUploadLine className="text-2xl " />
            )}
          </div>
          {isUpload && <Upload />}
          <span className="md:hidden flex items-center justify-center  cursor-pointer">
            <IoIosSearch className="text-2xl text-neutral-700 font-medium ml-3 mr-3" />
          </span>
          <div 
          onClick={()=>setNotification(!isnotification)}
          className="flex items-center justify-center mr-6 text-lg font-thin cursor-pointer w-9 h-9 rounded-full hover:bg-neutral-200 p-2">
            <BsBell className="text-2xl" />
          </div>
          {
            isnotification&& <Notification/>
          }
          <div
            className="md:flex flex-shrink-0 hidden"
            onClick={() => setProfile(!isProfile)}
          >
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
              className="w-[40px]  h-[40px] cursor-pointer  rounded-full"
            />
          </div>
          {isProfile && <Profile />}
        </div>
      ) : (
        <div className="flex items-center ">
          <div className="flex items-center justify-center mr-3 text-lg font-thin cursor-pointer w-9 h-9 rounded-full hover:bg-neutral-200 p-2">
            <button onClick={() => setProfile(!isProfile)}>
              <BsThreeDotsVertical />
            </button>
          </div>
          {
            isProfile&&
            <div className="absolute inset-0 top-[80%]">
            <Profile/>
            </div>
           
          }
        <Link to="/Login">  <div className="flex items-center gap-2 text-blue-700 border border-neutral-400 px-2 py-1 rounded-2xl hover:bg-blue-100 cursor-pointer">
            <span className="text-xl">
              <FaRegUserCircle />
            </span>
            <span>
              <Link to="/Login">Sign in</Link>
            </span>
          </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
