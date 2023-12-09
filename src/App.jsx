import "./App.css";
import Home from "./layout/Home/Home";
import Navbar from "./layout/Navbar/Navbar";
import Categories from "./Component/categories/categories";
import Sliderbar from "./layout/Slidebar/SideBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shorts from "./Component/Shorts/Shorts";
import Searchpage from "./Component/SearchPage/Searchpage";
import SlideShow from "./Component/Navcomp/SlideShow/SlideShow";
import Channel from "./layout/Channel/Channel";
import Channelhome from "./layout/Channel/ChannelHome/Channelhome";
import Subsription from "./Component/Sidebarpages/Subscription/Subsription";
import History from "./Component/Sidebarpages/History/History";
import WatchLater from "./Component/Sidebarpages/WatchLater/WatchLater";
import LikedVideo from "./Component/Sidebarpages/LikedVideo/LikedVideo";
import { useSelector } from "react-redux";
function App() {
  const isSpeechShow = useSelector((state) => state.isSpeechShow);
  return (
    <div className="w-[100%] min-h-screen relative">
    {isSpeechShow && (
      <div className="absolute w-full h-full bg-black opacity-50 top-0 left-0 z-40" />
    )}
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/shorts"
            element={
              <div className="max-h-screen flex flex-col">
                <Navbar />
                <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
                  <Sliderbar />
                  <div className="overflow-x-hidden px-8 pb-4">
                    <div className="flex items-center justify-center h-auto">
                      <Shorts />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Route exact path="/videoplay" element={<SlideShow />} />
          <Route
            exact
            path="/searchpage"
            element={
              <div className="max-h-screen flex flex-col">
                <Navbar />
                
                <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
                <Sliderbar />
                  <div className="overflow-x-hidden px-8 pb-4">
                    <div className="overflow-x-hidden px-8 pb-4">
                      <div className={`sticky top-0 z-10 pb-4 `}>
                        <Categories />
                        <div className="mt-3">
                          <Searchpage />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          <Route
            exact
            path="/channel"
            element={
              <div className="max-h-screen flex flex-col">
                <Navbar />
                <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
                  <Sliderbar />
                  <div className="overflow-x-hidden px-8 pb-4">
                    <Channel />
                  </div>
                </div>
              </div>
            }
          />
         
          <Route
            exact
            path="/watchlater"
            element={
              <div className="max-h-screen flex flex-col">
              <Navbar />
              <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
                <Sliderbar />
                <div className="overflow-x-hidden px-8 pb-4">
                <WatchLater/>
                </div>
              </div>
            </div>
            }
          />
          <Route
            exact
            path="/LikedVideo"
            element={
              <div className="max-h-screen flex flex-col">
              <Navbar />
              <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
                <Sliderbar />
                <div className="overflow-x-hidden px-8 pb-4">
               <LikedVideo/>
                </div>
              </div>
            </div>
            }
          />
          <Route
            exact
            path="/history"
            element={
              <div className="max-h-screen flex flex-col">
              <Navbar />
              <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
                <Sliderbar />
                <div className="overflow-x-hidden px-8 pb-4">
                <History/>
                </div>
              </div>
            </div>
              
             }
          />
          <Route
            exact
            path="/subscription"
            element={
              <div className="max-h-screen flex flex-col">
              <Navbar />
              <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto ">
                <Sliderbar />
                <div className="overflow-x-hidden px-8 pb-4">
                <Subsription/>
                </div>
              </div>
            </div>
              
             }
          />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
