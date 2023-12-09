import { videosData } from "../../../Data/videoData"
import VideoComp from "../VideoComp/VideoComp"
const ChannelVideos = () => {
  return (
    <div className="border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300 pb-9">
    <h2 className="font-bold text-xl mt-5">For You</h2>
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(250px,0fr))] mt-5">
    {videosData.filter((item=>item.duration>60)).map((video) => (
      <VideoComp
        key={video.id}
        id={video.id}
        title={video.title}
        thumbnailUrl={video.thumbnailUrl}
        videoUrl={video.videoUrl}
        textTitle={'xs'}
        textSize={'xs'}
        fontBold={'bold'}
      />
    ))}
    </div>
    
    </div>
  )
}

export default ChannelVideos