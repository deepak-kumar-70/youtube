import React from 'react';
import './HomeLoader.css'; // Import the CSS file

const HomeLoader = () => {
  return (
    <div>
      <div className="w-full h-[70px] bg-neutral-300">   
      </div>
      <div className="flex">
        <div className="w-[280px] h-[82vh] mt-7 bg-neutral-300"></div>
        <div className="w-full mt-7 ml-5">
          <div className="flex gap-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="animated-bg rounded-xl w-[410px] h-[270px] bg-neutral-300"></div>
            ))}
          </div>
          <div className="flex gap-4 mt-7">
            {[4, 5, 6].map((index) => (
              <div key={index} className="animated-bg rounded-xl w-[410px] h-[270px] bg-neutral-300"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoader;
