import React from "react";
import reputation from "../assets/logo/Adani_2012_logo.png";

const OurCustomers = () => {
  const array = new Array(5).fill(null);
  return (
    <div
      className=" w-full bg-white shapedividers flex flex-col items-center justify-center py-20"
      // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1
        className="text-4xl my-10 font-bold p-2 inline-block text-center
      "
      >
        Our Happy Customers :)
      </h1>

      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 items-center justify-center gap-5">
        {array.map((ele, index) => (
          <div className="w-48 h-48 " key={index}>
            <img
              src={reputation}
              alt="icon"
              className="block mx-auto rounded-md border shadow-lg"
              width={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurCustomers;
