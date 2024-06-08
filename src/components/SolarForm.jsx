import React from "react";
import InputField from "../components/InputField";

const SolarForm = ({
  formData,
  states,
  cities,
  handleChange,
  handleStateChange,
  handleCalculate,
  isEmpty,
  isLoading,
}) => {
  return (
    <form className="w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="flex items-center justify-center">
        {isEmpty && (
          <Toast message="All Fields Required" className="text-red-600" />
        )}
      </div>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4 items-center justify-center">
        <div className="mb-6">
          <label
            className="block text-left text-gray-700 font-semibold mb-2"
            htmlFor="load_requirement"
          >
            Load Requirement (kW):
          </label>
          <div className="shadow-sm border rounded-lg">
            <InputField
              id="load_requirement"
              type="text"
              name="load_requirement"
              placeholder="Load Requirement in kW"
              onChange={handleChange}
              value={formData.load_requirement}
              className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-left text-gray-700 font-semibold mb-2"
            htmlFor="roof_area"
          >
            Available Roof Area (sq. ft.):
          </label>
          <div className="shadow-sm border rounded-lg">
            <InputField
              id="roof_area"
              type="text"
              name="roof_area"
              placeholder="Available Roof Area"
              onChange={handleChange}
              value={formData.roof_area}
              className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-left text-gray-700 font-semibold mb-2"
            htmlFor="average_rate_per_unit"
          >
            Electricity Unit Cost:
          </label>
          <div className="shadow-sm border rounded-lg">
            <InputField
              id="average_rate_per_unit"
              type="text"
              name="average_rate_per_unit"
              placeholder="Electricity Unit Cost"
              onChange={handleChange}
              value={formData.average_rate_per_unit}
              className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4 items-center justify-center">
        <div className="mb-6">
          <label
            className="block text-left text-gray-700 font-semibold mb-2"
            htmlFor="monthly_average_consumption"
          >
            Monthly Average Consumption
          </label>
          <div className="shadow-sm border rounded-lg">
            <InputField
              id="monthly_average_consumption"
              type="text"
              name="monthly_average_consumption"
              placeholder="Monthly Average Consumption"
              onChange={handleChange}
              value={formData.monthly_average_consumption}
              className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="state_id"
            className="block text-left text-gray-700 font-semibold mb-2"
          >
            State
          </label>
          <div className="shadow-sm border rounded-lg">
            <select
              name="state_id"
              id="state_id"
              value={formData.state_id}
              onChange={handleStateChange}
              className="mt-1 block w-full border-none rounded-md shadow-sm  p-3 focus:outline-none"
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.state}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="city_id"
            className="block text-left text-gray-700 font-semibold mb-2"
          >
            City
          </label>
          <div className="shadow-sm border rounded-lg">
            <select
              name="city_id"
              id="city_id"
              value={formData.city_id}
              onChange={handleChange}
              className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
            >
              <option value="">Select City</option>
              {cities &&
                cities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.city_name}
                  </option>
                ))}
            </select>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4 items-center justify-center">
        <div className="mb-6">
          <label
            className="block text-left text-gray-700 font-semibold mb-2"
            htmlFor="margin_money_percentage"
          >
            Margin Money (Min 20%)
          </label>
          <div className="shadow-sm border rounded-lg">
            <InputField
              id="margin_money_percentage"
              type="text"
              name="margin_money_percentage"
              placeholder="Margin Money Percentage"
              onChange={handleChange}
              value={formData.margin_money_percentage}
              className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-left text-gray-700 font-semibold mb-2"
            htmlFor="interest_rate"
          >
            Rate of Interest
          </label>
          <div className="shadow-sm border rounded-lg">
            <InputField
              id="interest_rate"
              type="text"
              name="interest_rate"
              placeholder="Rate of Interest"
              onChange={handleChange}
              value={formData.interest_rate}
              className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-left text-gray-700 font-semibold mb-2"
            htmlFor="loan_period"
          >
            Loan Period
          </label>
          <div className="shadow-sm border rounded-lg">
            <InputField
              id="loan_period"
              type="text"
              name="loan_period"
              placeholder="Loan Period"
              onChange={handleChange}
              value={formData.loan_period}
              className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
            />
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={handleCalculate}
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
      >
        {isLoading ? "Please wait..." : "Calculate"}
      </button>
    </form>
  );
};

export default SolarForm;
