import { useEffect, useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import CalculatorContent from "../components/CalculatorContent";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import InputField from "../components/InputField";
import Toast from "../components/Toast";
import axios from "axios";
// import { useCount } from "../context/Context";
import contactusImage from "../assets/images/contactus.jpg";
import { useNavigate } from "react-router-dom";

const SolarCalculator = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isData, setIsData] = useState(false);
  const [calculatedData, setCalculatedData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    state_id: "1",
    city_id: "1",
    monthly_average_consumption: "800",
    load_requirement: "0",
    roof_area: "0",
    average_rate_per_unit: "7",
    margin_money_percentage: "21",
    interest_rate: "5",
    loan_period: "7",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    const isFormDataEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );
    if (isFormDataEmpty) {
      setIsEmpty(true);
    } else {
      setIsLoading(true);
      axios
        .post("http://127.0.0.1:8000/solar-calculators/", formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setCalculatedData(res.data), setIsData(true);
          setIsLoading(false);
        })
        .catch(
          (error) => alert(error.message, "Please Login")
          // navigate("/login")
        );
      setIsEmpty(false);
    }
  };

  return (
    <>
      <Nav showSideNavHandler={() => setShowSideNav(!showSideNav)} />
      <Banner title="Solar Saving Calculator" />
      <SideNav
        showSideNavHandler={() => setShowSideNav(!showSideNav)}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section
        className="bg-gray-100 py-16 lg:py-24 bg-contain"
        style={{ backgroundImage: `url(${contactusImage})` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-12">
              <form className="w-full mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-center">
                  {isEmpty && (
                    <Toast
                      message="All Fields Required"
                      className="text-red-600"
                    />
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
                        name="state"
                        id="state_id"
                        value={formData.state_id}
                        onChange={handleChange}
                        className="mt-1 block w-full border-none rounded-md shadow-sm  p-3 focus:outline-none"
                      >
                        <option value="">Select State</option>
                        <option value="1">State1</option>
                        <option value="2">State2</option>
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
                        name="city"
                        id="city_id"
                        value={formData.city_id}
                        onChange={handleChange}
                        className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
                      >
                        <option value="">Select City</option>
                        <option value="1">City1</option>
                        <option value="2">City2</option>
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
                        placeholder="Available Roof Area"
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
                        placeholder="Electricity Unit Cost"
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
              {isData && <CalculatorContent data={calculatedData} />}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SolarCalculator;
