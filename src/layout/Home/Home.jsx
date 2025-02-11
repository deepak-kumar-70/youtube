import VideosComp from "../../Component/Navcomp/VideosComp/VideosComp";
import Categories from "../../Component/categories/categories";
import Navbar from "../Navbar/Navbar";
import Sliderbar from "../Slidebar/SideBar";
import { videosData } from "../../Data/videoData";
import { useSelector } from "react-redux";
import { useState } from "react";
import ShortComp from "../../Component/Navcomp/ShortComp/ShortComp";
import BottomNavigator from "../../Component/Responsive/BottomNavigator/BottomNavigator";
import Message from "../../Component/Comp/Tostifymessage/Message";
import { CategoriesItem } from "../../Data/categories";
export default function Home() {
  const isSpeechShow = useSelector((state) => state.isSpeechShow);
  const [selectedCategory, setSelectedCategory] = useState(CategoriesItem[0])
  return (
    <div className="md:max-h-screen min-h-screen flex flex-col relative justify-center items-center md:items-end max-w-full">
    

      <Navbar />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 md:overflow-auto relative ">
        <Sliderbar />
        <div className="md:overflow-x-hidden md:px-8 px-0 pb-4 relative z-10 ">
          <div
            className={`sticky top-0 pb-4 bg-white z-50 md:block hidden ${
              isSpeechShow ? "null" : "bg-white"
            } `}
          >
        
            <Categories   selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}/>
          </div>
          <div className="md:grid gap-4 md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] md:w-auto w-full  mt-5">
            {videosData
              .slice(0, 11)
              .filter((item) => item.duration > 60)
              .map((video) => (
                <VideosComp
                  key={video.id}
                  {...video}
                  textTitle={"sm"}
                  textSize={"sm"}
                  fontBold={"semibold"}
                  flexCol={"flex-col"}
                
                />
              ))}
          </div>

          <div
           className="md:grid gap-4 
           md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:w-auto mt-5 w-full
            flex-wrap flex px-3">
            {videosData
              .slice(0, 15)
              .filter((item) => item.duration < 60)
              .map((video, index) => (
                <ShortComp
                  key={video.id}
                  index={index}
                  {...video}
                  textTitle={"sm"}
                  textSize={"sm"}
                  fontBold={"semibold"}
                  height={'[410px]'}
                 
                />
              ))}
          </div>

          <div 
          className="md:grid
           gap-4 md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] 
           w-full md:w-auto mt-5  "
           >
            {videosData
              .slice(0, 11)
              .filter((item) => item.duration > 60)
              .map((video) => (
                <VideosComp
                  key={video.id}
                  {...video}
                  textTitle={"sm"}
                  textSize={"sm"}
                  fontBold={"semibold"}
                  flexCol={"flex-col"}
                />
              ))}
          </div>
        </div>
      </div>
      <div className="md:hidden bg-white fixed bottom-0 z-50">
      <BottomNavigator/>
      </div>
     
    </div>
  );
}
