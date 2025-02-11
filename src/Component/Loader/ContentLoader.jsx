import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import ContentLoader, { Facebook, } from "react-content-loader";

import { IoIosSearch } from "react-icons/io";
const ContentLoaders = () => {
  return (
    <div>
      <div className="w-full h-[70px]  z-50 flex justify-between items-center px-6">
        <div>
          <CiMenuBurger className="text-2xl" />
        </div>
        <div className="flex  ">
          <input
            type="search"
            placeholder="search"
            className="rounded-l-full border  
         border-neutral-400 shadow-inner shadow-neutral-100 py-1 px-4 text-lg w-[600px]
          focus:border-blue-500 outline-none"
          />
          <Link
            to="/searchpage"
            className="flex items-center justify-center py-1 bg-neutral-100 px-4 rounded-r-full border-neutral-400 border border-l-0 flex-shrink-0 hover:bg-neutral-200 cursor-pointer"
          >
            <span>
              <IoIosSearch className="text-2xl" />
            </span>
          </Link>
        </div>
        <div>
        <ContentLoader viewBox="0 0 380 260">
        <rect x="0" y="20" rx="5" ry="5" width="70" height="172" />
        <rect x="0" y="20" rx="5" ry="5" width="70" height="172" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>
        </div>
      </div>
      <ContentLoader viewBox="0 0 380 260">
        <Facebook />
        <rect x="0" y="20" rx="5" ry="5" width="70" height="172" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    </div>
  );
};

export default ContentLoaders;
