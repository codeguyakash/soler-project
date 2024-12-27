import { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import CalculatorContent from "../components/CalculatorContent";
import Nav from "../components/Nav";

import contactusImage from "../assets/images/contactus.jpg";
import SolarForm from "./../components/SolarForm";
import PROD_BASE_URL from "../config/config";

const BASE_URL = PROD_BASE_URL || "http://13.201.119.28:5001";

const SolarCalculator = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isData, setIsData] = useState(false);
  const [calculatedData, setCalculatedData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const [formData, setFormData] = useState({
    state_id: "",
    city_id: "",
    monthly_average_consumption: "",
    load_requirement: "",
    roof_area: "",
    average_rate_per_unit: "",
    margin_money_percentage: "",
    interest_rate: "",
    loan_period: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const fetchStates = async () => {
    try {
      const res2 = await axios.get("/api/state/state/");
      if (Array.isArray(res.data)) {
        setStates(res.data);
      } else {
        console.error("Expected an array but got:", res.data);
      }
      const res = await axios.get(`${BASE_URL}/api/state/state/`);
      setStates(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const fetchCities = async (stateId) => {
    try {
      const res = await axios.get(`/api/state/city/?state_id=${stateId}`);
      if (Array.isArray(res.data)) {
        setCities(res.data);
      } else {
        console.error("Expected an array but got:", res.data);
      }
      const resqh = await axios.get(
        `${BASE_URL}/api/state/city/?state_id=${stateId}`
      );
      setCities(res.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleStateChange = (e) => {
    const stateId = e.target.value;
    setFormData({ ...formData, state_id: stateId, city_id: "" });
    fetchCities(stateId);
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const handleCalculate = async (e) => {
    e.preventDefault();
    const isFormDataEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );

    if (isFormDataEmpty) {
      setIsEmpty(true);
    } else {
      setIsLoading(true);
      let token = localStorage.getItem("accessToken");
      try {
        const res = await axios.post(
          `${BASE_URL}/api/solar/solar-calculators/`,
          formData,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
        setCalculatedData(res.data);
        setIsData(true);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
        setIsLoading(false);
      }
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
              <SolarForm
                formData={formData}
                states={states}
                cities={cities}
                handleChange={handleChange}
                handleStateChange={handleStateChange}
                handleCalculate={handleCalculate}
                isEmpty={isEmpty}
                isLoading={isLoading}
              />
              {isData && <CalculatorContent data={calculatedData} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolarCalculator;
