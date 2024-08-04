import React from "react";
import InfoBox from "./InfoBox";
import { TiLightbulb } from "react-icons/ti";

// Importing images (make sure these paths are correct)
import systemSizeIcon from "../assets/cal-icons/salary.png";
import cityIcon from "../assets/cal-icons/money.png";
import consumptionIcon from "../assets/cal-icons/light-bulb.png";
import costIcon from "../assets/cal-icons/tax.png";

import savingIcon from "../assets/cal-icons/money.png";
import roiIcon from "../assets/cal-icons/light-bulb.png";
import paybackIcon from "../assets/cal-icons/money.png";
import subsidyIcon from "../assets/cal-icons/tax.png";
import emiIcon from "../assets/cal-icons/salary.png";
import loanIcon from "../assets/cal-icons/money.png";
import downPaymentIcon from "../assets/cal-icons/money.png";
import productionIcon from "../assets/cal-icons/money.png";
import areaIcon from "../assets/cal-icons/money.png";
import loadDetailsIcon from "../assets/cal-icons/money.png";

const CalculatorContent = ({ data }) => {
  return (
    <section className="bg-gray-100 py-16 lg:py-24 rounded-lg my-5">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-lg font-extrabold text-gray-900 sm:text-4xl  flex items-center justify-center">
              Calculated Data <TiLightbulb className="text-yellow-500" />
            </h2>
          </div>
          <br />
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-5">
              <InfoBox
                title={data?.city?.city_name || "City"}
                value={data?.state?.state}
                unit="State"
                imgSrc={cityIcon}
              />
              <InfoBox
                title="Consumption"
                value={`${data?.monthly_average_consumption || "N/A"} kWh`}
                unit="Monthly"
                imgSrc={consumptionIcon}
              />
              <InfoBox
                title="System Size"
                value={`${data?.recommended_system_size || "N/A"} kW`}
                unit="Size"
                imgSrc={systemSizeIcon}
              />
              <InfoBox
                title="Installation Cost"
                value={`₹${data?.total_installation_cost || "N/A"}`}
                unit="Total"
                imgSrc={costIcon}
              />
              <InfoBox
                title="Cost Saving"
                value={`₹${data?.monthly_cost_saving || "N/A"}`}
                unit="Monthly"
                imgSrc={savingIcon}
              />
              <InfoBox
                title="ROI"
                value={
                  data?.annual_return_on_investment
                    ? `${data.annual_return_on_investment * 100}%`
                    : "N/A"
                }
                unit="Annual ROI"
                imgSrc={roiIcon}
              />
            </div>
            <hr />

            <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 my-5">
              <InfoBox
                title="Payback Period"
                value={`${data?.investment_payback_period || "N/A"} Years`}
                unit="Period"
                imgSrc={paybackIcon}
              />
              <InfoBox
                title="Subsidy"
                value={`₹${data?.subsidy_amount || "N/A"}`}
                unit="Amount"
                imgSrc={subsidyIcon}
              />
              <InfoBox
                title="EMI"
                value={`₹${data?.emi_amount || "N/A"}`}
                unit="Amount"
                imgSrc={emiIcon}
              />
              <InfoBox
                title="Loan Amount"
                value={`₹${data?.loan_amount || "N/A"}`}
                unit="Amount"
                imgSrc={loanIcon}
              />
              <InfoBox
                title="Down Payment"
                value={`₹${data?.down_payment || "N/A"}`}
                unit="Amount"
                imgSrc={downPaymentIcon}
              />
              <InfoBox
                title="Monthly Electricity Production"
                value={`${data?.monthly_electricity_production || "N/A"} kWh`}
                unit="Production"
                imgSrc={productionIcon}
              />
            </div>
            <hr />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 my-5">
              <InfoBox
                title="Area Requirement"
                value={`${data?.area_requirement_in_sqft || "N/A"} sq. ft.`}
                unit="Area"
                imgSrc={areaIcon}
              />
              <InfoBox
                title="System Size Requirement (Load Details)"
                value={`${
                  data?.system_size_requirement_if_load_details || "N/A"
                } kW`}
                unit="Size"
                imgSrc={loadDetailsIcon}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorContent;
