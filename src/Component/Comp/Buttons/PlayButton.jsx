import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";
const PlayButton = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        animate={{ opacity: 0, scale: 1.7 }}
        transition={{
            delay: 0.1,
            duration: 0.7,
        }}
        className="text-[2rem] top-[40%] left-[40%] h-[70px] w-[70px] 
rounded-full bg-[rgba(0,0,0,0.7)]  absolute text-white z-[10000]
flex items-center justify-center
"
      >
        <FaPlay className="text-[1.5rem]" />
      </motion.div>
    </div>
  );
};

export default PlayButton;
