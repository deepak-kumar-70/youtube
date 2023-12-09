import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import Category from "./Category/Category";
import Channelhome from "./ChannelHome/Channelhome";
import { useSelector } from "react-redux";
import ChannelVideos from "./ChannelVideo/ChannelVideos";
import ChannelShorts from "./ChannelShorts/ChannelShorts";
import ChannelLive from "./ChannelLive/ChannelLive";
import ChannelPlaylist from "./ChannelPlaylist/ChannelPlaylist";
import ChannelCommunity from "./ChannelCommunity/ChannelCommunity";

const channel = () => {
  const category = useSelector((state) => state.channelCategory);
  let channelComponent;
  switch (category) {
    case "channelHome":
      channelComponent = <Channelhome />;
      break;
    case "channelVideos":
      channelComponent = <ChannelVideos />;
      break;
    case "channelShorts":
      channelComponent = <ChannelShorts />;
      break;
    case "channelLive":
      channelComponent = <ChannelLive />;
      break;
    case "channelPlaylists":
      channelComponent = <ChannelPlaylist />;
      break;
    case "channelCommunity":
      channelComponent = <ChannelCommunity />;
      break;

    default:
      channelComponent = null;
  }
  return (
    <div className="ml-[100px] ">
      <div>
        <img
          className="w-full max-w-[70vw] h-[25vh] rounded-xl"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/79731568097599.5b50bca477735.jpg"
        />
      </div>
      <div className="mt-8 flex">
        <div>
          <img
            className="rounded-full "
            src="https://yt3.googleusercontent.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s176-c-k-c0x00ffffff-no-rj"
          />
        </div>
        <div className="ml-3">
          <h2 className="font-bold text-4xl">Apna College </h2>
          <p className=" text-neutral-600 mt-2 mb-2">
            <span>@ApnaCollegeOfficial</span>
            <span className="ml-1 mr-1">‧</span>
            <span>4.58M subscribers</span>
            <span className="ml-1 mr-1">‧</span>
            <span>785 videos</span>
          </p>
          <p className="text-neutral-600 flex items-center cursor-pointer mb-2">
            <span className="text-ellipsis whitespace-nowrap">
              I'm Shradha, Ex-Microsoft Software Engineer, DRDO. My journey
              started from a small village of...
            </span>
            <span className="text-black text-xl ml-3">
              <IoIosArrowForward />
            </span>
          </p>
          <div className="mb-2">
            <Link to="http://localhost:5173/channel" className="text-blue-800">
              http://localhost:5173/channel
            </Link>
            <Link>and 2 more links</Link>
          </div>
          <div>
            <button className="px-4 py-2 mt-4 bg-black text-white rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div>
        <Category />
        <div>
        {channelComponent}
        </div>
     
      </div>
    </div>
  );
};

export default channel;
