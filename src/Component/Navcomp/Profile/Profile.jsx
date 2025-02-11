import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../Loader/Loader";
import GetApi from "../../Comp/Api/GetApi";
const Profile = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const loginstatus = useSelector((state) => state.loginStatus);
  const apiUrl = "http://localhost:5000/Resister/6599098f6e2745678cb5bd04";
  const {  data, loadings, } = GetApi(apiUrl)
 
  const handleLogout = () => {
    setLoading(true);

    setTimeout(() => {
      localStorage.removeItem("token");
      navigate("/");
      window.location.reload();
    }, 1000);
  };
  if (loading) {
    return (
      <div className="absolute bg-black w-full h-screen flex justify-center items-center inset-0 z-[50]">
        <Loader />
      </div>
    );
  }

  return (
  
  
      
    <motion.div
      initial={{ opacity: "0" }}
      animate={{ opacity: "1", x: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 120,
      }}
      className="absolute top-[38%] w-[20vw]  right-3  py-3 bg-white shadow-sm shadow-slate-600 rounded-xl z-50"
    >
  {
    loadings
    ? (<div className="w-full h-full flex items-center justify-center"><Loader/></div>):(
  
   <>
      {loginstatus && 
        <div className="px-5 flex border-b-neutral-200 border-b-2 py-2">
          <div>
            <img
              src={data.user.avatar}
              className="w-[35px] h-[35px] cursor-pointer rounded-full mr-2"
            />
          </div>
          <div>
            <p>{data.user.name}</p>
            <p className="mb-2 text-sm">{data.user.email}</p>
            <Link to="#" className="text-blue-800 mt-6">
              View channnel detail
            </Link>
          </div>
        </div>
      }

      <div
        className={`overflow-y-auto ${loginstatus ? "h-[76vh]" : "h-auto"} `}
      >
        {loginstatus ? (
          <>
            <div className=" border-b-neutral-200 border-b-2 py-2">
              <Link to="">
                {" "}
                <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
                  <span>
                    <FaGoogle className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
                  </span>
                  <span>Google Account</span>
                </div>
              </Link>
              <Link to="">
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
              <Link to="">
                <div
                  onClick={handleLogout}
                  className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer"
                >
                  <span>
                    <CiLogin className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
                  </span>
                  <span>Sign out</span>
                </div>
              </Link>
            </div>
            <div className=" border-b-neutral-200 border-b-2 py-2">
              <Link to="">
                <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
                  <span>
                    <SiYoutubestudio className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
                  </span>
                  <span>DevTube Studio</span>
                </div>
              </Link>
              <Link to="">
                <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
                  <span>
                    <ImCoinDollar className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
                  </span>
                  <span>Purchess and memberships</span>
                </div>
              </Link>
            </div>
          </>
        ) : null}

        <div className=" border-b-neutral-200 border-b-2 py-2">
          <Link to="">
            {" "}
            <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
              <span>
                <RiShieldUserLine className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
              </span>
              <span>Your data In DevTube</span>
            </div>
          </Link>
          <Link to="">
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
          <Link to="">
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
          <Link to="">
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
          <Link to="">
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
          <Link to="">
            {" "}
            <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
              <span>
                <FaRegKeyboard className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
              </span>
              <span>Keyboard shortcut</span>
            </div>
          </Link>
        </div>
        <div className=" border-b-neutral-200 border-b-2 py-2">
          <Link to="">
            <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
              <span>
                <IoSettingsOutline className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
              </span>
              <span>Setting</span>
            </div>
          </Link>
        </div>
        <div className=" border-b-neutral-200 border-b-2 py-2">
          <Link to="">
            <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
              <span>
                <FaRegCircleQuestion className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
              </span>
              <span>Help</span>
            </div>
          </Link>
          <Link to="">
            <div className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200 cursor-pointer">
              <span>
                <MdOutlineFeedback className="text-xl mr-7 text-[rgba(0,0,0,0.9)]" />
              </span>
              <span>send Feedback</span>
            </div>
          </Link>
        </div>
      </div>
      </>
      )}
    </motion.div>
      
      
  );
};

export default Profile;
