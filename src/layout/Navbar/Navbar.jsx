/* eslint-disable react/prop-types */
import "regenerator-runtime/runtime";
import { IoIosSearch } from "react-icons/io";
import { IoMdMic } from "react-icons/io";
import { RiVideoUploadLine } from "react-icons/ri";
import { BsBell } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { RiVideoUploadFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { AiOutlinePlaySquare } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { IoRadioOutline } from "react-icons/io5";
// Profile
import { FaGoogle } from "react-icons/fa";
import { PiUserRectangleLight } from "react-icons/pi";
import { CiLogin } from "react-icons/ci";
import { SiYoutubestudio } from "react-icons/si";
import { ImCoinDollar } from "react-icons/im";
import { RiShieldUserLine } from "react-icons/ri";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineTranslate } from "react-icons/md";
import { IoShieldOutline } from "react-icons/io5";
import { BsGlobe2 } from "react-icons/bs";
import { FaRegKeyboard } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineFeedback } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import "../../css/animation.css";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useState } from "react";
import { Link } from "react-router-dom";
import { videosData } from "../../Data/videoData";
import { useDispatch } from "react-redux";
import { handleIsSlide, handleIsVideoSlide, handleSpeech } from "../../Redux/Slices/ShortIndexSlice/ShortSlice";
import { useSelector } from "react-redux";
import HeaderFirstSection from "../../Component/Navcomp/Headerfirstsection/HeaderFirstSection";
const Navbar = () => {
  const {
    transcript,
    listening,

    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();
  const [isUpload, setUpload] = useState(false);
  const [isProfile, setProfile] = useState(false);
  const[searchVal,setSearchVal]=useState('')
  const [showSearchBox,setShoeSearchBox]=useState(false)
 
  const dispatch=useDispatch()
  const isSpeechShow=useSelector((state)=>state.isSpeechShow)
  const isSlide=useSelector((state)=>state.isSlide)
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
    dispatch(handleSpeech(!isSpeechShow))
    if(transcript){
      setSearchVal(transcript)
    }
  };
  const handleShowSearchBox=()=>{
    setShoeSearchBox(!showSearchBox)
  }
   const filteredVideos = videosData.filter((val) => {
    if (!searchVal) {
      return true;
    } else {
    
      return (
        val.category &&
        val.category.some(
          (cat) =>
            cat &&
            cat.toLowerCase().startsWith(searchVal.toLowerCase())
        )
      );
    }
  });
  // const handleSlideVideo=()=>{
  //   dispatch(handleIsVideoSlide())
  // }
 
  return (
    <div className="flex justify-between px-10 md:py-5 py-[30px]  relative">
    <div className="md:block hidden">
    <HeaderFirstSection/>
    </div>
    
      <div className="flex items-center">
        <div className="flex flex-grow w-[600px] relative ">
          <input
            type="search"
            value={searchVal}
            onChange={(e)=>(setSearchVal(e.target.value))}
            placeholder="search"
            onClick={handleShowSearchBox}
            className="rounded-l-full border   border-neutral-400 shadow-inner shadow-neutral-100 py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          {
            (showSearchBox || searchVal !== '') &&
           
              <div  className="w-[90%] bg-white shadow shadow-neutral-700 h-[60vh] top-10 rounded-xl absolute z-50 py-7 ">
                
              
             { filteredVideos.slice(0,9).map((item,index)=>(
                  <ul key={index}>
                  <li className="hover:bg-neutral-200 cursor-pointer flex py-2">
                  <span>
                    <IoIosSearch className="text-2xl text-neutral-700 font-medium ml-3 mr-3" />
                  </span>
                  <span className="font-medium text-sm">{item.category.join(' ')}</span>
                </li>
                </ul>
                ))
             
              }
                 
                
              </div>
          
          }
          
         <Link
          to='/searchpage'
          className="flex items-center justify-center py-1 bg-neutral-100 px-4 rounded-r-full border-neutral-400 border border-l-0 flex-shrink-0 hover:bg-neutral-200 cursor-pointer"
          > <span>
            <IoIosSearch className="text-2xl" />
          </span></Link>
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
      <div className="flex items-center">
        <div
          onClick={() => setUpload(!isUpload)}
          className="flex items-center relative justify-center mr-6 text-lg font-thin cursor-pointer w-9 h-9 rounded-full hover:bg-neutral-200 p-2"
        >
          {isUpload ? (
            <RiVideoUploadFill className="text-2xl" />
          ) : (
            <RiVideoUploadLine className="text-2xl " />
          )}
        </div>
        {isUpload && (
          <motion.div className="absolute top-[75%]  right-3  py-3 bg-white shadow-sm shadow-slate-600 rounded-xl z-50">
            <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200">
              <span>
                <AiOutlinePlaySquare className="text-2xl mr-7" />
              </span>
              <span>Your Video</span>
            </div>
            <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200">
              <span>
                <IoRadioOutline className="text-2xl mr-7" />
              </span>
              <span>Go live</span>
            </div>
            <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200">
              <span>
                <IoCreateOutline className="text-2xl mr-7" />
              </span>
              <span>Create post</span>
            </div>
          </motion.div>
        )}
        <div className="flex items-center justify-center mr-6 text-lg font-thin cursor-pointer w-9 h-9 rounded-full hover:bg-neutral-200 p-2">
          <BsBell className="text-2xl" />
        </div>
        <div onClick={() => setProfile(!isProfile)}>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
            className="w-[40px] h-[40px] cursor-pointer rounded-full"
          />
        </div>
        {isProfile && (
          <motion.div
            initial={{ opacity: "0" }}
            animate={{ opacity: "1", x: "-100px" }}
            transition={{
            
              type:'spring',
             stiffness:120
          }}
            className="absolute top-[38%] w-[20vw]  right-3  py-3 bg-white shadow-sm shadow-slate-600 rounded-xl z-50"
          >
            <div className="px-5 flex border-b-neutral-200 border-b-2 py-2">
              <div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
                  className="w-[50px] h-[50px] cursor-pointer rounded-full mr-2"
                />
              </div>
              <div>
                <p>GuptaJi</p>
                <p className="mb-2">GuptaJi@gmail.com</p>
                <Link to="#" className="text-blue-800 mt-6">
                  View channnel detail
                </Link>
              </div>
            </div>
            <div className="overflow-y-auto h-[76vh] ">
            <div className=" border-b-neutral-200 border-b-2 py-2">
             <Link to=''> <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
                <span>
                  <FaGoogle className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
                </span>
                <span>Google Account</span>
              </div>
              </Link>
              <Link to=''>
              <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
                <span>
                  <PiUserRectangleLight className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
                </span>
                <span>Switch Account</span>
                <span className="text-2xl ml-auto">
                  <IoIosArrowForward />
                </span>
              </div>
              </Link>
              <Link to=''>
              <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
                <span>
                  <CiLogin className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
                </span>
                <span>Sign out</span>
              </div>
              </Link>
            </div>
            <div className=" border-b-neutral-200 border-b-2 py-2">
            <Link to=''>
            <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
              <span>
                <SiYoutubestudio className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
              </span>
              <span>DevTube Studio</span>
            </div>
            </Link>
            <Link to=''>
            <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
              <span>
                <ImCoinDollar className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
              </span>
              <span>Purchess and memberships</span>
            </div>
            </Link>
          </div>
          <div className=" border-b-neutral-200 border-b-2 py-2">
          <Link to=''> <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
             <span>
               <RiShieldUserLine className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
             </span>
             <span>Your data In DevTube</span>
           </div>
           </Link>
           <Link to=''>
           <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
             <span>
               <IoMoonOutline className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
             </span>
             <span>Apperance:Device Theme</span>
             <span className="text-2xl ml-auto">
               <IoIosArrowForward />
             </span>
           </div>
           </Link>
           <Link to=''>
           <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
             <span>
               <MdOutlineTranslate className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
             </span>
             <span>Language:British English</span>
             <span className="text-2xl ml-auto">
               <IoIosArrowForward />
             </span>
           </div>
           </Link>
           <Link to=''>
           <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
             <span>
               <IoShieldOutline className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
             </span>
             <span>Restricted Mode:off</span>
             <span className="text-2xl ml-auto">
               <IoIosArrowForward />
             </span>
           </div>
           </Link>
           <Link to=''>
           <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
             <span>
               <BsGlobe2 className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
             </span>
             <span>Location:India</span>
             <span className="text-2xl ml-auto">
               <IoIosArrowForward />
             </span>
           </div>
           </Link>
           <Link to=''> <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
           <span>
             <FaRegKeyboard className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
           </span>
           <span>Keyboard shortcut</span>
         </div>
         </Link>
         </div>
         <div className=" border-b-neutral-200 border-b-2 py-2">
         <Link to=''>
         <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
           <span>
             <IoSettingsOutline  className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
           </span>
           <span>Setting</span>
         </div>
         </Link>
        
       </div>
       <div className=" border-b-neutral-200 border-b-2 py-2">
       <Link to=''>
       <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
         <span>
           <FaRegCircleQuestion className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
         </span>
         <span>Help</span>
       </div>
       </Link>
       <Link to=''>
       <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
         <span>
           <MdOutlineFeedback className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
         </span>
         <span>send Feedback</span>
       </div>
       </Link>
     </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
