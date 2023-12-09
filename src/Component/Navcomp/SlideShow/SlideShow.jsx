import HeaderFirstSection from "../Headerfirstsection/HeaderFirstSection";
import LeftSlider from "../LeftSlider/LeftSlider";
import Navbar from "../../../layout/Navbar/Navbar";
import Videopages from "../../VidePages/Videopages";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { handleIsSlide } from "../../../Redux/Slices/ShortIndexSlice/ShortSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const SlideShow = () => {
  const isSlide = useSelector((state) => state.isSlide);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleIsSlide(false));
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  useEffect(() => {
    document.body.style.overflow = isSlide ? "hidden" : "auto";
  }, [isSlide]);

  return (
    <div className={'max-h-screen flex flex-col relative '}>
      {isSlide && (
        <motion.div
          className="absolute bg-white z-50 overflow-auto w-[250px] pr-1"
          initial={{ x: "-200px" }}
          animate={{ x: "0px" }}
          transition={{
            delay: 0,
            duration: 0.2,
          }}
        >
          <div className="mt-5 ml-10 mb-5 ">
            <HeaderFirstSection />
          </div>
          <div className="overflow-auto h-screen pl-3 scrollbar-hidden">
            <LeftSlider />
          </div>
        </motion.div>
      )}
      <div className="relative">
        {isSlide && (
          <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0 right-0 bottom-0 z-40" />
        )}
        <Navbar className={isSlide ? 'z-50' : 'z-40'} />
        <div className="overflow-auto">
          <Videopages />
        </div>
      </div>
    </div>
  );
};

export default SlideShow;
