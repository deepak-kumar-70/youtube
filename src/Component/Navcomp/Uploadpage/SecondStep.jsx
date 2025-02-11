import { RxCross1 } from "react-icons/rx";
import { LuMessageSquare } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { handleIsUploadPage } from "../../../Redux/Slices/ShortIndexSlice/ShortSlice";
import { TfiUpload } from "react-icons/tfi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineContentCopy } from "react-icons/md";
import "./style.css";
import { Link } from "react-router-dom";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";
const SecondStep = () => {
  const dispatch = useDispatch();
  return (
    <div className="absolute w-[60vw] h-[85vh] top-[1px] bg-white right-[140%] rounded-2xl ">
      <div className="w-full h-full flex flex-col justify-between relative">
        <div className="px-4 py-5 border-b-[1px] border-b-[rgba(0,0,0,0.4)] w-full flex justify-between">
          <div className="text-xl">Upload Video Name Here</div>
          <div className="flex items-center text-[rgba(0,0,0,0.7)] text-2xl gap-6 ml-4 cursor-pointer">
            <span>
              <LuMessageSquare />
            </span>
            <span onClick={() => dispatch(handleIsUploadPage())}>
              <RxCross1 />
            </span>
          </div>
        </div>
        <div className=" h-full w-full flex flex-col ">
          <div className="flex justify-center flex-col items-center mt-3 text-neutral-700">
            <div className="vertical-line mb-2">
              <div className="ml-1">Details</div>
              <div className="w-[70%] "></div>
              <div className="w-[60%]">Video Elements</div>
              <div className="w-[60%] "></div>
              <div className="ml-10">Checks</div>
              <div className="w-[100%] "></div>
              <div>Visibility</div>
            </div>
            <div className="vertical-line">
              <div className="bullet"></div>
              <div className="connector"></div>
              <div className="bullet"></div>
              <div className="connector"></div>
              <div className="bullet"></div>
              <div className="connector"></div>
              <div className="bullet"></div>
            </div>
          </div>
          <div className=" flex w-full h-full mt-6 overflow-auto">
            <div className="w-[60%] px-5 pt-5 overflow-auto">
              <div className="w-full flex justify-between items-center">
                <span className="font-bold text-neutral-600 text-xl">
                  Details
                </span>
                <span className="font-bold text-neutral-600 text-sm">
                  REUSE DETAILS
                </span>
              </div>
              <div>
                <div className="relative flex flex-col space-y-2">
                  <label
                    htmlFor="myInput"
                    className="absolute text-sm text-gray-600 pointer-events-none left-3 mb-10 top-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">Title(require)</span>
                      <span className="text-xl">
                        <HiOutlineQuestionMarkCircle />
                      </span>
                    </div>
                  </label>
                  <textarea
                    type="message"
                    id="myInput"
                    name="myInput"
                    className="border border-gray-300 px-3 pt-6 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="relative flex flex-col space-y-2 mt-5">
                  <label
                    htmlFor="myInput"
                    className="absolute text-sm text-gray-600 pointer-events-none left-3 mb-10 top-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-blue-500">Description</span>
                      <span className="text-xl">
                        <HiOutlineQuestionMarkCircle />
                      </span>
                    </div>
                  </label>
                  <textarea
                    type="message"
                    placeholder="Tell viewers about yyour video(type @ to mention channel)"
                    name="myInput"
                    className="border border-gray-300 px-3 pb-10 pt-7 rounded-md focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
              <div className="mt-2 font-normal"><span>Thumbnail</span></div>
              <div className="text-sm text-neutral-600">
              <span>Select or upload a picture that show whats in your video. A good thumbnail stand out draws viewr attension</span><Link className="text-blue-500 ml-1">Learn more</Link>
              </div>
             
              </div>
            </div>
            <div className="w-[40%] p-5 ">
              <div className=" h-[300px] bg-neutral-200 rounded-sm overflow-hidden">
                <video className="w-full " controls>
                  <source src="" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="px-2 py-2">
                  <div className="">
                    <div>
                      <span className="text-sm text-neutral-700 font-semibold">
                        Video Link
                      </span>
                    </div>
                    <div className="w-full flex justify-between">
                      <Link className="text-blue-600">www.youtube.com</Link>
                      <span>
                        <MdOutlineContentCopy />
                      </span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div>
                      <span className="text-sm text-neutral-700 font-semibold">
                        File Name
                      </span>
                    </div>
                    <div className="w-full ">
                      <span>This is the name of file</span>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-5 border-t-[1px] border-t-[rgba(0,0,0,0.4)] w-full flex justify-between items-center">
          <div className="flex gap-7 text-xl items-center text-neutral-700">
            <div>
              {" "}
              <TfiUpload className="" />
            </div>
            <div>
              {" "}
              <FaRegCircleCheck />
            </div>
            <div className="text-sm">
              <span>Check Complete.</span>
              <span>No issue found</span>
            </div>
          </div>
          <div>
            <button className="text-white bg-blue-600 px-4  py-2 rounded-sm">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
