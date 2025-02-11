import { AiOutlinePlaySquare } from "react-icons/ai";
import { IoCreateOutline } from "react-icons/io5";
import { IoRadioOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import Uploadpage from "../Uploadpage/Uploadpage";
import { useDispatch } from "react-redux";
import { handleIsUpload, handleIsUploadPage } from "../../../Redux/Slices/ShortIndexSlice/ShortSlice";
const Upload = () => {
    const isUpload=useSelector((state)=>state.isUploade)
    const isUploadPage=useSelector((state)=>state.isUploadPage)
    const dispatch=useDispatch()
    const handleUpload=()=>{
     
      dispatch(handleIsUploadPage())
    
    }
  return (
    <motion.div className="absolute top-[75%]  right-3  py-3 bg-white shadow-sm shadow-slate-600 rounded-xl z-50">
    <div onClick={handleUpload} className="flex  py-2 items-center w-[100%] px-5  hover:bg-neutral-200">
      <span>
        <AiOutlinePlaySquare className="text-2xl mr-7" />
      </span>
      <span>Upload Video</span>
    </div>
    {
      isUploadPage && 
      <Uploadpage/>
    }
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

export default Upload