import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const CalcalatorCard = ({ item, id }) => {
  const handleIncreament = () => {
    console.log("Increament");
  };
  const handleDecrement = () => {
    console.log("Decrement");
  };
  return (
    <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
      <h2 className="font-bold text-center rounded-md text-primary p-5">
        {item.key}
      </h2>
      <div className="flex items-center justify-center w-60 mx-auto">
        <div className="text-4xl text-gray-400">
          <CiCirclePlus />
        </div>
        <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex items-center justify-center flex-col">
          {item.value.power ? (
            <h3 className="text-center my-2 max-content">
              Power: {item.value.power}
            </h3>
          ) : (
            ""
          )}
          {item.value.units ? (
            <h3 className="text-center my-2 max-content">
              Units: {item.value.units}
            </h3>
          ) : (
            ""
          )}
          {item.value.years ? (
            <h3 className="text-center my-2 max-content">
              Years: {item.value.years}
            </h3>
          ) : (
            ""
          )}
          {item.value.area ? (
            <h3 className="text-center my-2 max-content">
              Area: {item.value.area}
            </h3>
          ) : (
            ""
          )}
          {item.value.amount ? (
            <h3 className="text-center my-2 max-content">
              Amount: {item.value.amount}
            </h3>
          ) : (
            ""
          )}
          {item.value.currency ? (
            <h3 className="text-center my-2 max-content">
              Currency: {item.value.currency}
            </h3>
          ) : (
            ""
          )}
          {item.value.percentage ? (
            <h3 className="text-center my-2 max-content">
              Percentage{item.value.percentage}
            </h3>
          ) : (
            ""
          )}
          {item?.value?.returnOnInvestment?.percentage ? (
            <h3 className="text-center my-2 max-content">
              Percentage : {item.value.returnOnInvestment.percentage}
            </h3>
          ) : (
            ""
          )}
        </div>
        <div className="text-4xl text-gray-400">
          <CiCircleMinus />
        </div>
      </div>
    </div>
  );
};

export default CalcalatorCard;
