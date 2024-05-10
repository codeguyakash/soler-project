import React from "react";
import backgroundImage from "../assets/images/10-removebg-preview.png";
// ----------
import reputation from "../assets/icons/reputation.png";
import anniversary from "../assets/icons/anniversary.png";
import trust from "../assets/icons/trust.png";
import warranty from "../assets/icons/warranty.png";
import insurance from "../assets/icons/insurance.png";

const SolarAdvantage = () => {
  const array = new Array(5).fill(null);
  return (
    <div
      className=" w-full bg-gradient-to-r from-blue-900 to-green-500 flex flex-col items-center justify-center pb-20"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-4xl text-white my-10 font-bold p-2 inline-block text-center">
        The Solaroof Advantage
      </h1>

      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-5">
        {/* {array.map((ele, index) => ( */}
        <div className="w-48 h-48 ">
          <img
            src={warranty}
            alt="icon"
            className="block mx-auto "
            width={100}
          />
          <h2 className="text-center text-white py-2">20+ years’ Warranty</h2>
        </div>
        <div className="w-48 h-48  ">
          <img
            src={insurance}
            alt="icon"
            className="block mx-auto "
            width={100}
          />
          <h2 className="text-center text-white py-2">
            Insurance for Solar System
          </h2>
        </div>
        <div className="w-48 h-48  ">
          <img src={trust} alt="icon" className="block mx-auto " width={100} />
          <h2 className="text-center text-white py-2">
            Trusted Quality Assurance
          </h2>
        </div>
        <div className="w-48 h-48  ">
          <img
            src={anniversary}
            alt="icon"
            className="block mx-auto "
            width={100}
          />
          <h2 className="text-center  text-white py-2 ">
            25+ years’ experience
          </h2>
        </div>
        <div className="w-48 h-48  ">
          <img
            src={reputation}
            alt="icon"
            className="block mx-auto "
            width={100}
          />
          <h2 className="text-center text-white py-2">Free installations</h2>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
};

export default SolarAdvantage;
