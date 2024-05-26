import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import CalculatorContent from "../components/CalculatorContent";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import InputField from "../components/InputField";
import Toast from "../components/Toast";
import { IoLocationSharp } from "react-icons/io5";

const SolarCalculator = () => {
  const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  const [location, setLocation] = useState("");
  const [electricBill, setElectricBill] = useState("");
  const [userType, setUserType] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const [calculatedData, setCalculatedData] = useState(false);

  const handleCalculate = () => {
    if (location && electricBill && userType) {
      const solarCalculation = {
        location: location,
        electricBill: electricBill,
        userType: userType,
      };
      console.log(solarCalculation);
      setIsEmpty(false);
      setCalculatedData(true);
      alert(JSON.stringify(solarCalculation));
    } else {
      setIsEmpty(true);
      setCalculatedData(false);
    }
  };

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };
  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
  };

  const error = () => {
    console.log("Unable to retrieve your location");
  };
  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="Solar Saving Calculator" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section className="bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Solar Saving Calculator
              </h2>
            </div>
            <div className="mt-12">
              <form className="max-w-xlg mx-auto bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center justify-center">
                  {isEmpty ? (
                    <Toast
                      message="All Fields Required"
                      className="text-red-600"
                    />
                  ) : (
                    ""
                  )}
                </div>
                <div className="mb-6">
                  <label className="block text-left text-gray-700 font-semibold mb-2">
                    Location
                  </label>
                  <div className="flex shadow-sm border rounded-lg">
                    <InputField
                      id="location"
                      type="text"
                      name="location"
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Location"
                      value={location}
                      className="mt-1 block w-full border-none rounded-md focus:border-indigo-500 focus:ring-indigo-500 p-3 focus:outline-none"
                    />
                    <div
                      className="flex items-center justify-center text-primary  cursor-pointer p-3 "
                      onClick={handleLocation}
                    >
                      <h5 className="text-sm font-semibold"> DETECT</h5>
                      <IoLocationSharp className="text-2xl" />
                    </div>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-left text-gray-700 font-semibold mb-2">
                    Average Monthly Electric Bill:
                  </label>
                  <div className="shadow-sm border rounded-lg">
                    <InputField
                      id="electricBill"
                      type="text"
                      name="electricBill"
                      onChange={(e) => setElectricBill(e.target.value)}
                      placeholder="Average Electric Bill"
                      value={electricBill}
                      className="mt-1 block w-full border-none rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 focus:outline-none"
                    />
                  </div>
                </div>
                <div className="mb-6 flex items-center justify-center gap-6">
                  <button
                    type="button"
                    onClick={() => handleUserTypeChange("Residential")}
                    className={`px-4 py-2 ${
                      userType === "Residential"
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Residential
                  </button>
                  <button
                    type="button"
                    onClick={() => handleUserTypeChange("Commercial")}
                    className={`px-4 py-2  ${
                      userType === "Commercial"
                        ? "bg-primary text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    Commercial
                  </button>
                </div>
                <button
                  type="button"
                  onClick={handleCalculate}
                  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Calculate
                </button>
              </form>
              {calculatedData ? <CalculatorContent /> : ""}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SolarCalculator;
