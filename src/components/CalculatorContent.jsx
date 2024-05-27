import React from "react";
import CalcalatorCard from "./CalcalatorCard";

const CalculatorContent = () => {
  const values = [
    {
      key: "Recommended Solar System Size",
      value: { power: 2.75, units: "kW" },
    },
    { key: "Approx Area Requirement", value: { area: 206.25, units: "Sqft" } },
    {
      key: "Total Cost For Installation",
      value: { amount: 165000, currency: "INR" },
    },
    { key: "Govt Subsidy", value: { amount: 73500, currency: "INR" } },
    { key: "Investment Pay back Period", value: { years: 4.0 } },
    {
      key: "Return on Investment",
      value: { returnOnInvestment: { percentage: 26 } },
    },
    { key: "Saving In 25 Years", value: { amount: 750173, currency: "INR" } },
  ];

  return (
    <>
      <section className="bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-lg     font-extrabold text-gray-900 sm:text-4xl">
                Calculated Data
              </h2>
            </div>
            <br />
            <div className="container mx-auto px-4 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  items-center justify-center gap-5">
              {values.map((item, index) => (
                <CalcalatorCard key={index} item={item} id={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculatorContent;
