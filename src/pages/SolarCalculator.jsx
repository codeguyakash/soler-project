import React, { useState, useEffect } from "react";
import axios from "axios";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import CalculatorContent from "../components/CalculatorContent";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";

import contactusImage from "../assets/images/contactus.jpg";
import { useNavigate } from "react-router-dom";
import SolarForm from "./../components/SolarForm";

const SolarCalculator = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isData, setIsData] = useState(true);
  const [calculatedData, setCalculatedData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const token = localStorage.getItem("accessToken");
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

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
      const response = await axios.get(
        "http://127.0.0.1:8000/api/state/state/",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setStates(response.data);
    } catch (error) {
      console.error("Failed to fetch states", error);
      setShowMessage("Failed to load states, please refresh the page.");
    }
  };
  console.table(formData);
  const fetchCities = async (stateId) => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:8000/api/state/city/?state_id=${stateId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCities(response.data);
    } catch (error) {
      console.error("Failed to fetch cities", error);
      setShowMessage("Failed to load cities, please try again.");
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
          setCalculatedData(res.data);
          setIsData(true);
          setIsLoading(false);
        })
        .catch((error) => {
          alert(error.message, "Please Login");
          // navigate("/login");
        });
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
      <Footer />
    </>
  );
};

export default SolarCalculator;
