import { videosData } from "../../../Data/videoData";
import VideoComp from "../VideoComp/VideoComp";

const Channelhome = () => {
  return (
    <div>
      <div className="border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300 pb-9">
        <h2 className="font-bold text-xl mt-5">For You</h2>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(350px,0fr))] mt-5">
          {videosData
            .slice(0, 8)
            .filter((item) => item.duration > 60)
            .map((video) => (
              <VideoComp
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.videoUrl}
                textTitle={"sm"}
                textSize={"xs"}
                fontBold={"semibold"}
              />
            ))}
        </div>
      </div>
      <div className="border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300 pb-9">
        <h2 className="font-bold text-xl mt-5">For You</h2>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,0fr))] mt-5">
          {videosData
            .slice(0, 10)
            .filter((item) => item.duration > 60)
            .map((video) => (
              <VideoComp
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.videoUrl}
                textTitle={"xs"}
                textSize={"xs"}
                fontBold={"bold"}
              />
            ))}
        </div>
      </div>
      <div className="border-t-[1px] border-t-slate-300 border-b-[1px] border-b-slate-300 pb-9">
        <h2 className="font-bold text-xl mt-5">For You</h2>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,0fr))] mt-5">
          {videosData
            .slice(0, 10)
            .filter((item) => item.duration > 60)
            .map((video) => (
              <VideoComp
                key={video.id}
                id={video.id}
                title={video.title}
                thumbnailUrl={video.thumbnailUrl}
                videoUrl={video.videoUrl}
                textTitle={"xs"}
                textSize={"xs"}
                fontBold={"bold"}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Channelhome;
