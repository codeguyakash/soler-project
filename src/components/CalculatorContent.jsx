import React from "react";
// import CalcalatorCard from "./CalcalatorCard";

const CalculatorContent = ({ data }) => {
  console.log(data);
  // const cards = [
  //   { title: data.city.city_name, content: ["State:", data.state.state] },
  //   {
  //     title: "Consumption",
  //     content: ["Monthly:", `${data.monthly_average_consumption} kWh`],
  //   },
  //   {
  //     title: "System Size",
  //     content: ["Size:", `${data.recommended_system_size} kW`],
  //   },
  //   {
  //     title: "Installation Cost",
  //     content: ["Total:", `₹${data.total_installation_cost}`],
  //   },
  //   {
  //     title: "Cost Saving",
  //     content: ["Monthly:", `₹${data.monthly_cost_saving}`],
  //   },
  //   {
  //     title: "ROI",
  //     content: [
  //       "Annual ROI:",
  //       `${(data.annual_return_on_investment * 100).toFixed(2)}%`,
  //     ],
  //   },
  //   {
  //     title: "Payback Period",
  //     content: [
  //       "Period:",
  //       `${data.investment_payback_period.toFixed(2)} Years`,
  //     ],
  //   },
  //   { title: "Subsidy", content: ["Amount:", `₹${data.subsidy_amount}`] },
  //   { title: "EMI", content: ["Amount:", `₹${data.emi_amount.toFixed(2)}`] },
  // ];
  return (
    <>
      <section className="bg-gray-100 py-16 lg:py-24 rounded-lg my-5">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-lg     font-extrabold text-gray-900 sm:text-4xl">
                Calculated Data
              </h2>
            </div>
            <br />
            <div className="container mx-auto px-4 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 datas-center justify-center gap-5">
              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  {data.city.city_name}
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">State:</h3>
                    <h3 className="text-center my-2 max-content">
                      {data.state.state}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  Consumption
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">Monthly:</h3>
                    <h3 className="text-center my-2 max-content">
                      {data.monthly_average_consumption} kWh
                    </h3>
                  </div>
                </div>
              </div>
              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  System Size
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">Size:</h3>
                    <h3 className="text-center my-2 max-content">
                      {data.recommended_system_size} kW
                    </h3>
                  </div>
                </div>
              </div>
              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  Installation Cost
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">Total:</h3>
                    <h3 className="text-center my-2 max-content">
                      ₹{data.total_installation_cost}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  Cost Saving
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">Monthly:</h3>
                    <h3 className="text-center my-2 max-content">
                      ₹{data.monthly_cost_saving}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  ROI
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">
                      Annual ROI:
                    </h3>
                    <h3 className="text-center my-2 max-content">
                      {data.annual_return_on_investment * 100}%
                    </h3>
                  </div>
                </div>
              </div>
              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  Payback Period
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">Period:</h3>
                    <h3 className="text-center my-2 max-content">
                      {data.investment_payback_period} Years
                    </h3>
                  </div>
                </div>
              </div>
              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  Subsidy
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">Amount:</h3>
                    <h3 className="text-center my-2 max-content">
                      ₹{data.subsidy_amount}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  EMI
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">Amount:</h3>
                    <h3 className="text-center my-2 max-content">
                      ₹{data.emi_amount}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container mx-auto px-4 grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 datas-center justify-center gap-5">
        {cards.map((card, index) => (
          <CalcalatorCard
            key={index}
            title={card.title}
            content={card.content}
          />
        ))}
      </div> */}
    </>
  );
};

export default CalculatorContent;
