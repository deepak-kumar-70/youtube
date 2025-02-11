import { motion } from "framer-motion";
import { IoIosPause } from "react-icons/io";

const PauseButton = () => {
  return (
    <div>
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 1.5 }}
      transition={{
        delay: 0.1,
        duration: 0.7,
      }}
      className="text-[2rem] top-[40%] left-[40%] h-[70px] w-[70px] 
rounded-full bg-[rgba(0,0,0,0.7)]  absolute text-white z-[10000]
flex items-center justify-center
"
    >
      <IoIosPause className="text-[1.75rem]" />
    </motion.div>
  </div>
  )
}

export default PauseButton