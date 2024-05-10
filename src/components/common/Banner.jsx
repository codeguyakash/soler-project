import React from "react";
const Banner = ({ title }) => {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-900 to-green-500 py-20 flex items-center justify-center ">
        <div className="inline-block backdrop-blur-lgs">
          <h1 className="text-white font-semibold text-5xl">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
