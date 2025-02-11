import { motion } from "framer-motion";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
const Notification = () => {
  return (
    <motion.div
      initial={{ opacity: "0" }}
      animate={{ opacity: "1", x: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 120,
      }}
      className="absolute top-[100%] w-[30vw]  right-3  py-3 bg-white shadow-sm shadow-slate-600 rounded-xl h-[85vh] z-50"
    >
      <div className="px-4 py-2 border-b-[1px] border-b-[rgba(0,0,0,0.4)] w-full flex justify-between">
        <div className="text-xl">
          {" "}
          <span>Notifications</span>
        </div>
        <div className="flex items-center text-[rgba(0,0,0,0.7)] text-2xl gap-6 ml-4 cursor-pointer">
          <span>
            <IoSettingsOutline />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center w-full h-[90%]  flex-col">
      <div className="flex flex-col items-center">
      <div className="text-neutral-400 text-[120px] mb-2"><span><CiBellOn/></span></div>
      <div className="text-neutral-500 text-base font-bold mb-1"><span>Your notifications live here</span></div>
      <div className="text-neutral-600 flex flex-col items-center">
      <div><span>Subscribe to your favourite channels to </span></div>
      <div><span>receive notifications about their latest </span></div>
      <div><span>videos.</span></div>
      </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Notification;
