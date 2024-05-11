import React from "react";
import howsolarwork from "../assets/images/roof-top-solar.png";
import backgroundImage from "../assets/images/bg-line-2.png";

const SolarWork = () => {
  return (
    <div
      className="bg-white py-10 flex flex-col items-center justify-center bg-cover bg-no-repeat bg-top"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="w-[60vw]">
        <h1 className="text-4xl my-5 font-bold p-2 text-center">
          Rooftop Solar and its working
        </h1>
        <p className="text-lg text-gray-800 text-center my-2">
          A rooftop solar photovoltaic (PV) system can either cater to the
          mini-power needs of a building or feed excess electricity back into
          the grid. While the installation of such a system is open to anyone,
          its size greatly depends on factors like available space, property's
          electricity consumption, and the owner's investment capacity and
          inclination
        </p>
        <img
          src={howsolarwork}
          alt="how-solar-work"
          className="block mx-auto rounded"
          width={1000}
        />
      </div>
    </div>
  );
};

export default SolarWork;
