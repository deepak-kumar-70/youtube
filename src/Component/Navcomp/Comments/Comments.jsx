import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import CommentInput from "./CommentInput";
const Comments = () => {
  const [replyInput, setReplyInput] = useState(false);
  const [replies, setReplies] = useState(false);
  return (
    <div className="flex gap-4 w-full mt-3">
      <div>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
            className="w-[50px] h-[50px] cursor-pointer rounded-full mr-2"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="flex gap-3 mb-1">
          <div>
            <span className="font-semibold">@guptaji</span>
          </div>
          <div>
            <span className="text-neutral-500">2year ago</span>
          </div>
        </div>
        <div className="mb-1">
          <span>This is commment by deepak gupta</span>
        </div>
        <div className="flex gap-5 items-center text-lg w-full">
          <span className="flex">
            <span>
              <AiOutlineLike />
            </span>
            <span className="text-neutral-500 text-sm ml-2">10</span>
          </span>
          <span>
            <BiDislike />
          </span>
          <span
            className="px-2 py-1 rounded-2xl hover:bg-neutral-200 text-sm"
            onClick={() => setReplyInput(!replyInput)}
          >
            Reply
          </span>
        </div>
        {replyInput && (
          <div className="block w-full">
            <CommentInput />
          </div>
        )}
        <div
        onClick={()=>setReplies(!replies)}
        className="text-[#065FD4] font-semibold mt-2  hover:bg-blue-100 px-4 w-[130px] py-2 rounded-3xl flex items-center gap-4">
          <span>
            <IoIosArrowDown />
          </span>
          <span>1 reply</span>
        </div>
        {
            replies &&
            <div className="text-sm"><Comments/></div>
            
        }
      </div>
    </div>
  );
};

export default Comments;
