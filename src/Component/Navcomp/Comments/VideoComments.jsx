import { MdOutlineSort } from "react-icons/md";
import CommentInput from "./CommentInput";
import Comments from "./Comments";
const VideoComments = () => {
  return (
    <div>
      <div className="flex gap-6 text-lg items-center">
        <div className="font-bold text-xl">
          <span>54 </span>
          <span>Comments</span>
        </div>
        <div className="flex gap-2 text-lg items-center">
          <span className="text-2xl font-thin">
            <MdOutlineSort />
          </span>
          <span>Sort by</span>
        </div>
      </div>
      <div>
        <CommentInput />
        <div className="mt-5">
          <Comments/>
          <Comments/>
          
        </div>
      </div>
    </div>
  );
};

export default VideoComments;
