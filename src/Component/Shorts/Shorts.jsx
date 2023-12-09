/* eslint-disable react/prop-types */

import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { MdInsertComment } from "react-icons/md";
import { RiShareForwardFill } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { IoIosPause } from "react-icons/io";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import  { videosData } from '../../Data/videoData'
import { useRef, useState, useEffect} from "react";
import { async } from "regenerator-runtime";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const Shorts = () => {
    const[isPlay,setPlay]=useState(Array(videosData.length).fill(true))
    const [ismuted, setMuted] = useState(Array(videosData.length).fill(true))
    const[duration,setDuration]=useState()
    const[currentShortIndex,setCurrentShortIndex]=useState(0)
    const refPlay=useRef()
    const refPlayArray = videosData.map(() => useRef(null));
    const iconArr = [
        {
          icon: <BiSolidLike />,
          count: '200k',
        },
        {
          icon: <BiSolidDislike />,
          count: 'Dislike',
        },
        {
          icon: <MdInsertComment />,
          count: '300k',
        },
        {
          icon: <RiShareForwardFill />,
          count: "Share",
        },
        {
          icon: <BsThreeDots/>,
        },
        {
          img: 'https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s88-c-k-c0x00ffffff-no-rj',
        },
      ];
     
      const refItem = useRef([]);
      const shortIndexData=useSelector((state)=>state?.shortIndex)
      useEffect(() => {
      
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
              const intersectionIndex=Array.from(refItem.current).indexOf(entry.target)
              setCurrentShortIndex(intersectionIndex)
              }
            });
          },
          { threshold: 0.8 }
        );
        refItem.current.forEach((currentRefItem) => {
          if (currentRefItem) {
            observer.observe(currentRefItem);
          }
        });
        return () => observer.disconnect();
      }, [videosData]);  
      const handlePlay = (videoIndex) => {
        const video = refPlayArray[videoIndex].current;
        if (video) {
          if (video.paused) {
            video.play().then(() => {
              console.log('Video played');
            }).catch((error) => {
              console.error('Error playing video:', error);
            });
          } else {
            video.pause();
            console.log('Video paused');
          }
          setPlay((prev) => {
            const newStatus = [...prev];
            newStatus[videoIndex] = !newStatus[videoIndex];
            return newStatus;
          });
        }
      };
      const handleDuration = () => {
        if (refPlay.current) {
          const { duration } = refPlay.current;
          setDuration(duration);
        }
      };
      useEffect(() => {
        if (currentShortIndex !== null) {
          setMuted(prevMuted => prevMuted.map((value, index) => index === currentShortIndex ? false : true));
        }
       
      }, [currentShortIndex]);
    const handleMute = (videoIndex) => {
      const newArrIndex = [...ismuted];
      newArrIndex[videoIndex]=!newArrIndex[videoIndex]
      setMuted(newArrIndex)
    };
  return (
    <div>
    {
      videosData.filter((items,index)=>(index>shortIndexData && items.duration < 60 )).map((videoItem,videoindex)=>{
        return(
          <div className="flex ref-point" key={videoindex} ref={(el) => (refItem.current[videoindex] = el)}>
          <div className="h-[580px] bg-neutral-800 w-[330px] rounded-xl mb-2 mt-1 overflow-hidden relative" >
            {isPlay[videoindex] ? (
              <motion.div
              initial={{ opacity: 0, scale: 1 }}
                transition={{
                  delay: 0,
                  duration: 0.5,
                }}
                onClick={() => handlePlay(videoindex)}
                className="text-[2rem] top-[40%] left-[40%] h-[70px] w-[70px] 
                rounded-full bg-[rgba(0,0,0,0.7)]  absolute text-white z-[10000]
                flex items-center justify-center
                "
              >
                <FaPlay className="text-[1.75rem]"/>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{
                  opacity: 1,
                  scale: 1.3,
                }}
                transition={{
                  delay: 0,
                  duration: 0.5,
                }}
                onClick={() => handlePlay(videoindex)}
                className="text-[2rem] top-[40%] left-[40%] h-[70px] w-[70px] 
                rounded-full bg-[rgba(0,0,0,0.7)]  absolute text-white z-[10000]
                flex items-center justify-center
                "
              >
                <IoIosPause />
              </motion.div>
            )}
          <div className="absolute text-xl text-yellow-50 flex justify-between w-[310px] p-4 mt-1 ml-3 z-50">
          <span   onClick={()=>(handlePlay(videoindex))}  className="text-sm cursor-pointer" >{isPlay[videoindex]?<IoIosPause className="text-lg"/>:<FaPlay/>}</span>
          <span onClick={()=>(handleMute(videoindex))}  className="text-lg cursor-pointer" >{ismuted[videoindex]?<HiSpeakerXMark/>:<HiSpeakerWave/>}</span></div>
           <video 
           src={videoItem.videoUrl}
           ref={refPlayArray[videoindex]}
           className="h-full"
           autoPlay={isPlay[videoindex]}
           onClick={()=>(handlePlay(videoindex))}
           muted={ismuted[videoindex]}
           onLoadedMetadata={handleDuration}
           />
           <div className="absolute top-[80%] text-sm font-semibold text-yellow-50 flex-col flex justify-between w-[310px] p-2 mt-1 ml-1">
         <div className="flex items-center"><span><img src='https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s88-c-k-c0x00ffffff-no-rj' className="h-[40px] w-[40px] bg-slate-950 rounded-full mr-2" alt="icon" /></span>
         <span>@ApnaCollgeOfficial</span>
         <button  className="bg-yellow-50 text-neutral-800 rounded-[30px] py-2 px-3 ml-2">Subscribe</button>
         </div>
         <div>
         <span className="font-[600] mt-1">
         3 Best Code Editors for Programmers | Software Engineers</span>
         </div>
           </div>
          </div>
          <div className="  flex flex-col justify-end items-center ml-4">
            {iconArr.map((item, index) => (
              <div key={index} className="">
                {item.icon && <div className="flex items-center justify-center text-4xl font-thin cursor-pointer w-12 h-12 bg-neutral-200 rounded-full hover:bg-neutral-300 p-3">{item.icon}</div>}
                {item.count && <div className="flex items-center justify-center w-10 h-10">{item.count}</div>}
                {item.img && <img src={item.img} className="h-[40px] w-[40px] bg-slate-950 rounded-lg mb-3 mt-2" alt="icon" />}
              </div>
            ))}
          </div>
        </div>
        )
      })
    }
    </div>
  );
};
export default Shorts;
