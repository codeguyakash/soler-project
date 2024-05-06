import React from "react";
import reputation from "../assets/icons/reputation.png";

const SolarAdvantage = () => {
  const array = new Array(10).fill(null);
  return (
    <div className="bg-primary w-full h-1/2 flex flex-col items-center justify-center py-32">
      <h1 className="text-4xl text-white my-10 font-bold border-b-2 p-2">
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
