import React from "react";

const CalcalatorCard = ({ title, content }) => {
  return (
    <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
      <h2 className="font-bold text-center rounded-md text-primary p-5">
        {title}
      </h2>
      <div className="flex datas-center justify-center w-60 mx-auto">
        <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
          {content.map((item, index) => (
            <h3 key={index} className="text-center my-2 max-content">
              {item}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalcalatorCard;
