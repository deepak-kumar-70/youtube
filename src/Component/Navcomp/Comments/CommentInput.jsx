import { FaRegSmileBeam } from "react-icons/fa";
import EmojiPicker from 'emoji-picker-react';
import { useState } from "react";
import { shallowEqual } from "react-redux";

const CommentInput = ({showEmoji=true}) => {
  const [isEmoji, setEmoji] = useState(false);
  const [commentText, setCommentText] = useState("");

  const handleEmojiClick = (event) => {
    const emoji = event.emoji;
    console.log(event.emoji)
    setCommentText((prevComment) => prevComment + emoji);
    setEmoji(false)
  };

  return (
    <div className="flex items-center w-full mt-3">
      <div>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg"
          className="w-[50px] h-[50px] cursor-pointer rounded-full mr-2"
          alt="avatar"
        />
      </div>
      <div className="w-full">
        <div className="mb-4">
          <input
            placeholder="Add a comment"
            className="w-[98%] outline-none px-2 py-1 border-b-[rgba(0,0,0,0.6)] border-b-[1px] ml-3 focus:border-b-[rgba(0,0,0,0.9)]"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </div>
        <div className="flex justify-between items-center px-2 relative">
        {
          showEmoji && <div onClick={() => setEmoji(!isEmoji)}>
          <span className="text-xl text-[rgba(0,0,0,0.8)] ">
            <FaRegSmileBeam />
          </span>
        </div>
        }
          
          {isEmoji && (
            <div className="absolute top-7">
              <EmojiPicker onEmojiClick={handleEmojiClick} />
            </div>
          )}
          <div className="flex items-center gap-2">
            <div>
              <span className="px-5 py-2 hover:bg-neutral-300 rounded-3xl font-semibold">
                Cancel
              </span>
            </div>
            <div>
              <span className="px-5 py-2 bg-neutral-200 rounded-3xl hover:bg-neutral-400">
                Comment
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentInput;
