
import { CategoriesItem } from "../../Data/categories";
import { useState,useRef,useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
const Categories = () => {
  const containerRef = useRef(null);
  const [translate, setTranslate] = useState(0);
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  useEffect(() => {
    const observer = new window.ResizeObserver((entries) => {
      const container = entries[0]?.target;
      if (container == null) return;

      setIsLeftVisible(translate > 0);
      setIsRightVisible(
        translate + container.clientWidth < container.scrollWidth
      );
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [translate]);

  const handleTranslate = (amount) => {
    setTranslate((prevTranslate) => {
      const newTranslate = prevTranslate + amount;
      if (newTranslate <= 0) {
        setIsLeftVisible(false);
      } else {
        setIsLeftVisible(true);
      }

      if (containerRef.current) {
        const edge = containerRef.current.scrollWidth;
        const width = containerRef.current.clientWidth;
        if (newTranslate + width >= edge) {
          setIsRightVisible(false);
        } else {
          setIsRightVisible(true);
        }
      }

      return newTranslate >= 0 ? newTranslate : 0;
    });
  };

  return (
    <div ref={containerRef} className='overflow-x-hidden relative '>
      <div
        className='flex  whitespace-nowrap gap-3 transition-transform w-[max-content]'
        style={{ transform: `translateX(-${translate}px)` }}
      >
        {CategoriesItem.map((item, index) => (
          <div
            key={index}
            className='px-3 py-0 h-[35px] bg-neutral-200 rounded-md text-[13px] font-semibold whitespace-nowrap  transition-transform w-[max-content] hover:bg-neutral-300 cursor-pointer flex items-center justify-center'
          >
            {item}
          </div>
        ))}
      </div>
      {isLeftVisible && (
        <button
          className='l absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24 h-full'
          onClick={() => handleTranslate(-50)}
        >
        <IoIosArrowBack className=" p-2 w-[35px] h-[35px] rounded-full hover:bg-slate-300" />
        </button>
      )}
      {isRightVisible && (
        <button
          className=' absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white from-50% to-transparent w-24 h-full flex justify-end'
          onClick={() => handleTranslate(50)}
        >
        <IoIosArrowForward className=" p-2 w-[35px] h-[35px] rounded-full hover:bg-slate-300" />
        </button>
      )}
    </div>
  );
};

export default Categories;
