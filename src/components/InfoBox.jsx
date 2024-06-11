import React from "react";

const InfoBox = ({ title, value, unit, imgSrc }) => (
  <div className="h-60 border-2 border-dashed m-1 border-gray-300 rounded-sm flex items-center justify-center  ">
    <div>
      <h2 className="font-bold text-center rounded-md text-primary py-2">
        {title}
      </h2>
      <div className="flex items-center justify-center">
        <div className=" bg-gradient-to-br from-teal-400 via-teal-400 to-teal-200 bg-gray-200 mx-auto p-2 rounded-full w-36 h-36 border-8 border-gray-300 flex items-center justify-center flex-col shadow-lg">
          {imgSrc && (
            <img
              src={imgSrc}
              alt={`${title} icon`}
              className="w-12 h-12 mb-2"
            />
          )}
          <h4 className="font-semibold">{unit ? unit : ""}</h4>
          <p className="text-center text-sm">{value || "N/A"}</p>
        </div>
      </div>
    </div>
  </div>
);

export default InfoBox;
