import CommentInput from "./CommentInput";
import { motion } from "framer-motion";
import { MdOutlineSort } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import Comments from "./Comments";
const ShortsComment = ({iscomment, setComment}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: "-400px" }}
      animate={{
        opacity: 1,
        x: "0px",
      }}
      transition={{
        delay: 0,
        duration: 0.5,
      }}
      className="h-[575px] p-5 bg-white shadow-black shadow-sm z-[49] 
    w-[450px] left-[65.9%] top-[11.5%] inset-0 rounded-xl 
    mb-2 mt-1 absolute flex flex-col justify-between"
    >
      <div className="flex gap-6 text-lg items-center justify-between">
        <div className="font-bold text-xl">
          <span>54 </span>
          <span>Comments</span>
        </div>
        <div className="flex gap-4 text-lg items-center">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-thin">
              <MdOutlineSort />
            </span>

            <span 
            onClick={()=>setComment(!iscomment)}
            className="text-2xl font-thin hover:bg-neutral-300 p-3 rounded-full">
              <RxCross1 />
            </span>
          </div>
        </div>
      </div>
      <div className="h-full mt-4 text-sm overflow-y-auto">
      <Comments />
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      <Comments/>
      </div>
      <div>
        <CommentInput />
      </div>
    </motion.div>
  );
};

export default ShortsComment;
