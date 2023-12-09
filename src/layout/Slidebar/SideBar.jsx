
import { GoHome } from "react-icons/go";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlinePlaySquare } from "react-icons/ai";
// Explore icon
// Data
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LeftSlider from "../../Component/Navcomp/LeftSlider/LeftSlider";
const Sliderbar = () => {
  const isSlide=useSelector((state)=>state.isSlide)
  return (
    <>{
      isSlide?
      (
        <LeftSlider/>
      ):
      (
        <div className=" border-b-slate-200 border-b-2   text-[14px]">
        <Link to='/'>
          <div   
          className={`flex flex-col px-2 py-4 justify-center items-center w-[70px] rounded-xl hover:bg-neutral-200`}
          >
            <span>
              <GoHome className="text-xl mb-1 justify-center" />
            </span>
            <span className="text-[10px]">Home</span>
          </div>
          </Link>
          <Link to='/shorts'>
          <div className={`flex flex-col px-2 py-4 justify-center items-center w-[70px] rounded-xl hover:bg-neutral-200`}
          >
            <span>
              <SiYoutubeshorts className="text-xl mb-1" />
            </span>
            <span className="text-[10px]">Shorts</span>
          </div>
          </Link>
          <div className="flex flex-col px-2 py-4 justify-center items-center w-[70px] rounded-xl hover:bg-neutral-200 mb-3">
            <span>
              <MdOutlineSubscriptions className="text-xl mb-1" />
            </span>
            <span className="text-[10px]">Subscriptions</span>
          </div>
          <Link href=''>
          <div className="flex flex-col px-2 py-4 justify-center items-center w-[70px] rounded-xl hover:bg-neutral-200">
          <span>
            <AiOutlinePlaySquare className="text-xl mb-1" />
          </span>
          <span className="text-[10px]">Your Video</span>
        </div>
          </Link>
        </div>
        
      )
    }
     
    </>
  );
};

export default Sliderbar;
