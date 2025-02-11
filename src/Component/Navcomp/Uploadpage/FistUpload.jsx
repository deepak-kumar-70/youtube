import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { LuMessageSquare } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { handleIsUploadPage } from "../../../Redux/Slices/ShortIndexSlice/ShortSlice";
import { MdUpload } from "react-icons/md";
import { Link } from "react-router-dom";

const FistUpload = () => {
    const isUploadPage = useSelector((state) => state.isUploadPage);
    const dispatch = useDispatch();
    const [selectedVideo, setSelectedVideo] = useState(null);
  
    const handleFileChange = (e) => {
      const file = e.target.files[0];
  
      if (file) {
        const videoURL = URL.createObjectURL(file);
        setSelectedVideo(videoURL);
      }
    };
  return (
    <div className="absolute w-[60vw] h-[85vh] top-[1px] bg-white right-[140%] rounded-2xl">
    <div className="px-4 py-5 border-b-[1px] border-b-[rgba(0,0,0,0.4)] w-full flex justify-between">
    <div className="text-xl">Upload Videos</div>
    <div className="flex items-center text-[rgba(0,0,0,0.7)] text-2xl gap-6 ml-4 cursor-pointer">
      <span>
        <LuMessageSquare />
      </span>
      <span onClick={() => dispatch(handleIsUploadPage())}>
        <RxCross1 />
      </span>
    </div>
  </div>
    <div className="flex items-center justify-center w-full h-[70%] flex-col">
    {selectedVideo ? (
      <div>
        <video width="400" height="300" controls>
          <source src={selectedVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    ) : (
      <div className="flex flex-col items-center justify-center">
        <div>
          <div className="h-[120px] w-[120px] rounded-full bg-neutral-100  flex items-center justify-center text-7xl p-3">
            <span className="text-neutral-500">
              <MdUpload />
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="mt-5">Drag and drop video files to upload</p>
          <span className="text-neutral-600 text-sm mt-1">
            Your videos will be private until you publish them.
          </span>
          <div>
            <label
              htmlFor="file-input"
              className="relative top-6 cursor-pointer mt-10"
            >
              <input
                id="file-input"
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
              <span className="bg-blue-700 text-white py-2 px-9  rounded-[3px]">
                Select File
              </span>
            </label>
          </div>
        </div>
      </div>
    )}
  </div>
  <div className="h-[20%] w-full text-center flex items-center justify-center">
    <p className="text-neutral-600 text-xs w-[80%] ">
      By submitting your videos to YouTube, you acknowledge that you agree
      to YouTube's{" "}
      <Link>
        <span className="text-blue-600">Terms of Service</span>
      </Link>{" "}
      and
      <Link>
        <span className="text-blue-600"> Community Guidelines.</span>
      </Link>
      Please make sure that you do not violate others' copyright or privacy
      rights.
      <Link>
        <span className="text-blue-600"> Learn more</span>
      </Link>
    </p>
  </div></div>
  )
}

export default FistUpload