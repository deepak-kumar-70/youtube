import { SlMenu } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { handleIsSlide } from "../../../Redux/Slices/ShortIndexSlice/ShortSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const HeaderFirstSection = (props) => {
  console.log(props, "props");
  const isSlide = useSelector((state) => state.isSlide);
  const dispatch = useDispatch();
  const handleSliderbar = () => {
    dispatch(handleIsSlide(!isSlide));
  };
  useEffect(()=>{
    dispatch(handleIsSlide(true))
  },[])
  return (
    <div className="flex items-center">
      <span
        onClick={handleSliderbar}
        className="md:flex items-center justify-center mr-4 text-lg 
        font-thin cursor-pointer w-9 h-9
        hidden 
         rounded-full hover:bg-neutral-200 p-2"
      >
        <SlMenu className="text-2xl" />
      </span>
      <span>
        <span className="px-2 py-1 bg-[#FF0000] text-white mr-1 rounded-md">
          Dev
        </span>
        Tube
      </span>
    </div>
  );
};

export default HeaderFirstSection;
