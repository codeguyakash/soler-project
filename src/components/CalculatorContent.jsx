import React from "react";
import InfoBox from "./InfoBox";

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
            <div className="container mx-auto px-4">
              {/* part one here */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5">
                <InfoBox
                  title={data?.city?.city_name || "City"}
                  value={data?.state?.state}
                  unit="State"
                />
                <InfoBox
                  title="Consumption"
                  value={`${data?.monthly_average_consumption || "N/A"} kWh`}
                  unit="Monthly"
                />
                <InfoBox
                  title="System Size"
                  value={`${data?.recommended_system_size || "N/A"} kW`}
                  unit="Size"
                />
                <InfoBox
                  title="Installation Cost"
                  value={`₹${data?.total_installation_cost || "N/A"}`}
                  unit="Total"
                />
                <InfoBox
                  title="Cost Saving"
                  value={`₹${data?.monthly_cost_saving || "N/A"}`}
                  unit="Monthly"
                />
                <InfoBox
                  title="ROI"
                  value={
                    data?.annual_return_on_investment
                      ? `${data.annual_return_on_investment * 100}%`
                      : "N/A"
                  }
                  unit="Annual ROI"
                />
              </div>
              <hr />
              {/* part two here */}
              <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 my-5">
                <InfoBox
                  title="Payback Period"
                  value={`${data?.investment_payback_period || "N/A"} Years`}
                  unit="Period"
                />
                <InfoBox
                  title="Subsidy"
                  value={`₹${data?.subsidy_amount || "N/A"}`}
                  unit="Amount"
                />
                <InfoBox
                  title="EMI"
                  value={`₹${data?.emi_amount || "N/A"}`}
                  unit="Amount"
                />
                <InfoBox
                  title="Loan Amount"
                  value={`₹${data?.loan_amount || "N/A"}`}
                  unit="Amount"
                />
                <InfoBox
                  title="Down Payment"
                  value={`₹${data?.down_payment || "N/A"}`}
                  unit="Amount"
                />
                <InfoBox
                  title="Monthly Electricity Production"
                  value={`${data?.monthly_electricity_production || "N/A"} kWh`}
                  unit="Production"
                />
              </div>
              <hr />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 my-5">
                <InfoBox
                  title="Area Requirement"
                  value={`${data?.area_requirement_in_sqft || "N/A"} sq. ft.`}
                  unit="Area"
                />
                <InfoBox
                  title="System Size Requirement (Load Details)"
                  value={`${
                    data?.system_size_requirement_if_load_details || "N/A"
                  } kW`}
                  unit="Size"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalculatorContent;
