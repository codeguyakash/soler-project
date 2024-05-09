import React from "react";
// import residential from "../assets/images/residential-new.jpg";
// import industrial from "../assets/images/industrial-new.jpg";
import commerial from "../assets/images/commerial.jpg";
import backgroundImage from "../assets/images/whygosolarpanel.webp";

const HowToUseSolar = () => {
  return (
    <div
      className="flex flex-col items-center justify-center bg-no-repeat bg-cover py-32 px-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="text-4xl my-10 text-white font-bold p-2 inline-block text-center">
        How to use Solar
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-10 no-gutters mx-2">
        <div className="col-md-6 relative group hover:scale-105 duration-300 ease-in-out">
          <div className="">
            <a href="#">
              <img
                className="w-250 rounded-lg border-2"
                src={commerial}
                alt="resident"
              />
              <div className="opacity-0 p-10 absolute bg-primary  group-hover:opacity-100 transition-opacity duration-700 ease-in-out top-1 md:top-20">
                <h3 className="text-2xl text-white  font-semibold">
                  Residential
                </h3>
                <p className="text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, odio?
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-6 relative group hover:scale-105 duration-300 ease-in-out">
          <div className="">
            <a href="#">
              <img
                className="w-250 rounded-lg border-2"
                src={commerial}
                alt="resident"
              />
              <div className="opacity-0 p-10 absolute bg-primary group-hover:opacity-100 transition-opacity duration-700 ease-in-out top-1 md:top-20">
                <h3 className="text-2xl text-white  font-semibold">
                  Residential
                </h3>
                <p className="text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, odio?
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-6 relative group hover:scale-105 duration-300 ease-in-out">
          <div className="">
            <a href="#">
              <img
                className="w-250 rounded-lg border-2"
                src={commerial}
                alt="resident"
              />
              <div className="opacity-0 p-10 absolute bg-primary group-hover:opacity-100 transition-opacity duration-700 ease-in-out top-1 md:top-20">
                <h3 className="text-2xl text-white  font-semibold">
                  Residential
                </h3>
                <p className="text-gray-100">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dicta, odio?
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToUseSolar;
