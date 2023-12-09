import VideosComp from "../../Component/Navcomp/VideosComp/VideosComp";
import Categories from "../../Component/categories/categories";
import Navbar from "../Navbar/Navbar";
import Sliderbar from "../Slidebar/SideBar";
import { videosData } from "../../Data/videoData";
import { useSelector } from "react-redux";
import ShortComp from "../../Component/Navcomp/ShortComp/ShortComp";

export default function Home() {
  const isSpeechShow = useSelector((state) => state.isSpeechShow);

  return (
    <div className="md:max-h-screen min-h-screen flex flex-col relative ">
    

      <Navbar />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 md:overflow-auto relative">
        <Sliderbar />
        <div className="md:overflow-x-hidden px-8 pb-4 relative z-10">
          <div
            className={`sticky top-0 pb-4 bg-white z-50 ${
              isSpeechShow ? "null" : "bg-white"
            } `}
          >
            <Categories />
          </div>
          <div className="md:grid gap-4 md:grid-cols-[repeat(auto-fill,minmax(380px,1fr))]  mt-5">
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

          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] mt-5 ">
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
                />
              ))}
          </div>

          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(380px,1fr))] mt-5">
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
    </div>
  );
}
