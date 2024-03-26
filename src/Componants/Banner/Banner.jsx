import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="bg-[#1313130D] rounded-xl flex px-28 py-20 justify-between mt-14 mb-14">
        <div>
          <h2 className="text-[56px] font-bold fair-dis mb-12">
            Books to freshen up your bookshelf
          </h2>

          <button className="btn border primary-bg px-7 mb-6 text-xl font-bold text-white hover:border-[#23BE0A] hover:bg-transparent hover:text-[#23BE0A]">
            View The List
          </button>
        </div>
        <div>
          <img
            className="w-[318px]"
            src="https://i.postimg.cc/3JknQ02n/banner.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;