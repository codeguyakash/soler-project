import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import CalculatorContent from "../components/CalculatorContent";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import InputField from "../components/InputField";
import Toast from "../components/Toast";
import { useCount } from "../context/Context";

const SolarCalculator = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [calculatedData, setCalculatedData] = useState(false);
  const counterState = useCount();

  const [formData, setFormData] = useState({
    loadRequirement: "",
    roofArea: "",
    electricityUnitCost: "",
    state: "",
    city: "",
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
      console.log("Form data submitted:", formData);
      alert(JSON.stringify(formData));
      setCalculatedData(true);
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
      <section className="bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Solar Saving Calculator
              </h2>
              <h2>Count {counterState.count}</h2>
            </div>
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
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-x-4">
                  <div className="mb-6">
                    <label className="block text-left text-gray-700 font-semibold mb-2">
                      Load Requirement (kW):
                    </label>
                    <div className="shadow-sm border rounded-lg">
                      <InputField
                        id="loadRequirement"
                        type="text"
                        name="loadRequirement"
                        placeholder="Load Requirement in kW"
                        onChange={handleChange}
                        value={formData.loadRequirement}
                        className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-left text-gray-700 font-semibold mb-2">
                      Available Roof Area (sq. ft.):
                    </label>
                    <div className="shadow-sm border rounded-lg">
                      <InputField
                        id="roofArea"
                        type="text"
                        name="roofArea"
                        placeholder="Available Roof Area"
                        onChange={handleChange}
                        value={formData.roofArea}
                        className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label className="block text-left text-gray-700 font-semibold mb-2">
                      Electricity Unit Cost:
                    </label>
                    <div className="shadow-sm border rounded-lg">
                      <InputField
                        id="electricityUnitCost"
                        type="text"
                        name="electricityUnitCost"
                        placeholder="Electricity Unit Cost"
                        onChange={handleChange}
                        value={formData.electricityUnitCost}
                        className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                  <div className="mb-6">
                    <label
                      htmlFor="state"
                      className="block text-left text-gray-700 font-semibold mb-2"
                    >
                      State
                    </label>
                    <div className="shadow-sm border rounded-lg">
                      <select
                        name="state"
                        id="state"
                        value={formData.state}
                        onChange={handleChange}
                        className="mt-1 block w-full border-none rounded-md shadow-sm  p-3 focus:outline-none"
                      >
                        <option value="">Select State</option>
                        <option value="State1">State1</option>
                        <option value="State2">State2</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="city"
                      className="block text-left text-gray-700 font-semibold mb-2"
                    >
                      City
                    </label>
                    <div className="shadow-sm border rounded-lg">
                      <select
                        name="city"
                        id="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="mt-1 block w-full border-none rounded-md shadow-sm   p-3 focus:outline-none"
                      >
                        <option value="">Select City</option>
                        <option value="City1">City1</option>
                        <option value="City2">City2</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCalculate}
                  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Calculate
                </button>
              </form>
              {calculatedData && <CalculatorContent />}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SolarCalculator;
