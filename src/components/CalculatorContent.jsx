import React from "react";

const CalculatorContent = ({ data }) => {
  console.log(data);

  return (
    <>
      <section className="bg-gray-100 py-16 lg:py-24 rounded-lg my-5">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-lg font-extrabold text-gray-900 sm:text-4xl">
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

              {/* Monthly Average Consumption */}
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

              {/* System Size */}
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

              {/* Installation Cost */}
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

              {/* Cost Saving */}
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

              {/* ROI */}
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

              {/* Payback Period */}
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

              {/* Subsidy */}
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

              {/* EMI */}
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

              {/* New Fields */}
              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  Loan Amount
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">Amount:</h3>
                    <h3 className="text-center my-2 max-content">
                      ₹{data.loan_amount}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  Down Payment
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">Amount:</h3>
                    <h3 className="text-center my-2 max-content">
                      ₹{data.down_payment}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  Monthly Electricity Production
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">
                      Production:
                    </h3>
                    <h3 className="text-center my-2 max-content">
                      {data.monthly_electricity_production} kWh
                    </h3>
                  </div>
                </div>
              </div>

              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  Area Requirement
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">Area:</h3>
                    <h3 className="text-center my-2 max-content">
                      {data.area_requirement_in_sqft} sq. ft.
                    </h3>
                  </div>
                </div>
              </div>

              <div className="shadow-md h-60 border-2 border-gray-300 border-dashed rounded-md">
                <h2 className="font-bold text-center rounded-md text-primary p-5">
                  System Size Requirement (Load Details)
                </h2>
                <div className="flex datas-center justify-center w-60 mx-auto">
                  <div className="bg-gray-300 mx-auto p-2 rounded-full w-32 h-32 border-2 border-gray-400 border-dashed flex datas-center justify-center flex-col">
                    <h3 className="text-center my-2 max-content">Size:</h3>
                    <h3 className="text-center my-2 max-content">
                      {data.system_size_requirement_if_load_details} kW
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculatorContent;
