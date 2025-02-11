import { AiOutlinePlaySquare } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { IoRadioOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleIsUpload } from "../../../Redux/Slices/ShortIndexSlice/ShortSlice";
const ResponsieUpload = () => {
    const isUpload=useSelector((state)=>state.isUploade)
    const dispatch=useDispatch()
  return (
    <motion.div 
    initial={{y:'100%'}}
    animate={{y:'0'}}
    transition={{delay:'0.3', duration:'0.3'}}
    className="w-full absolute bottom-[18%]  right-0  py-3  bg-white shadow-sm shadow-slate-600 rounded-xl z-50">
    <div className="flex items-center justify-between px-5">
    <div><span className="font-semibold text-xl ">Create</span></div>
    <div
    onClick={()=>dispatch(handleIsUpload())}
    className=" rounded-full p-3 ml-6 hover:bg-neutral-300 cursor-pointer "
  >
    <RxCross1 className="text-xl " />
  </div>
    </div>
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
  )
}

export default ResponsieUpload