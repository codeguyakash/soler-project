import React from "react";
const Banner = ({ title }) => {
  console.log(title);
  return (
    <>
      <div className="bg-primary py-20 flex items-center justify-center ">
        <div className="border inline-block">
          <h1 className="text-white font-semibold text-5xl">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
