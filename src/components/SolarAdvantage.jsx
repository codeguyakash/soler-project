import React from "react";
import reputation from "../assets/icons/reputation.png";
import backgroundImage from "../assets/images/10-removebg-preview.png";

const SolarAdvantage = () => {
  const array = new Array(5).fill(null);
  return (
    <div
      className=" w-full bg-blue-900 shapedividers flex flex-col items-center justify-center py-20"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-4xl text-white my-10 font-bold p-2 inline-block text-center">
        The Solaroof Advantage
      </h1>

      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-5">
        {array.map((ele, index) => (
          <div className="w-48 h-48 " key={index}>
            <img
              src={reputation}
              alt="icon"
              className="block mx-auto"
              width={120}
            />
            <h2 className="text-center font-semibold text-white text-1xl">
              30+ years’ experience
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarAdvantage;
