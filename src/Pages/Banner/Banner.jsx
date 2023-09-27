import React from "react";

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/sQXnmqK/banner.png')`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 0.5,
  };

  return (
    <div className="h-[50vh] flex justify-center items-center my-5" style={bannerStyle}>
      <div>
        <h1 className="text-5xl mb-10 font-bold text-black">I Grow By Helping People In Need</h1>
        <input className="border-2  w-[470px] h-[48px] px-4 rounded-lg" type="text" placeholder="search here..." />
        <button className="btn ml-2 bg-[#FF444A] text-white">Search</button>
      </div>
    </div>
  );
};

export default Banner;
