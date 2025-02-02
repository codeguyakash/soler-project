import React, { useEffect, useState } from "react";
import InputField from "./InputField";
import contactus from "../assets/icons/contact_us_re_4qqt.svg";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import PROD_BASE_URL from "../config/config";

const BASE_URL = PROD_BASE_URL || "http://13.201.119.28:5001";

const ContactForm = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [apiUrl, setApiUrl] = useState("");
  const navigate = useNavigate();

  const requestType = localStorage.getItem("Request-Type");

  useEffect(() => {
    if (requestType === "Maintenance") {
      setApiUrl(`${BASE_URL}/api/contact/api/contact/maintance/`);
    } else {
      setApiUrl(`${BASE_URL}/api/contact/inquiries/`);
    }
  }, [requestType]);

  const [formData, setFormData] = useState({
    state: "",
    city: "",
    interest_in: "Solar for Home",
    name: "",
    contract_number: "",
    company_name: "",
    email: "",
    pin_code: "",
    address: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const fetchStates = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/state/state/`);
      setStates(res.data);
    } catch (error) {
      console.error(error.message);
      setShowMessage("Failed to load states, please refresh the page.");
    }
  };

  const fetchCities = async (stateId) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/state/city/?state_id=${stateId}`
      );
      setCities(response.data);
    } catch (error) {
      console.error("Failed to fetch cities", error);
      setShowMessage("Failed to load cities, please try again.");
    }
  };

  const handleStateChange = (e) => {
    const stateId = e.target.value;
    setFormData({ ...formData, state: stateId, city: "" });
    fetchCities(stateId);
  };

  useEffect(() => {
    fetchStates();
  }, []);

  const validateForm = () => {
    const { state, city, name, contract_number, email, pin_code, address } =
      formData;
    return (
      state && city && name && contract_number && email && pin_code && address
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      toast.error("All Fields Required");
      setIsEmpty(true);
      return;
    }
    setIsLoading(true);
    try {
      const res = await axios.post(apiUrl, formData);
      if (res.status === 201) {
        toast.success("Sent Success...");
        setFormData({
          state: "",
          city: "",
          interest_in: "Solar for Home",
          name: "",
          contract_number: "",
          company_name: "",
          email: "",
          pin_code: "",
          address: "",
          comments: "",
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
      setIsLoading(false);
    } catch (error) {
      alert(`${error.message}. Please Login`);
      // navigate("/login");
      setIsLoading(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-green-500 py-2 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 w-full lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:max-w-none sm:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src={contactus}
              alt={contactus}
              width={500}
              className="rounded"
            />
          </div>
          <div>
            <Toaster />
            <div>{isEmpty ? <Toaster /> : " "}</div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <label htmlFor="name">Name</label>
                  <InputField
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    placeholder="Your Name"
                    value={formData.name}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full"
                  />
                </div>
                <div>
                  <label htmlFor="contract_number">Phone Number</label>
                  <InputField
                    id="contract_number"
                    type="number"
                    name="contract_number"
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    value={formData.contract_number}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full"
                  />
                </div>
                <div>
                  <label htmlFor="company_name">Company Name</label>
                  <InputField
                    id="company_name"
                    type="text"
                    name="company_name"
                    onChange={handleChange}
                    placeholder="Company Name (if not for home)"
                    value={formData.company_name}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <InputField
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Your Email"
                    value={formData.email}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full"
                  />
                </div>
                <div>
                  <label htmlFor="state">State</label>
                  <select
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleStateChange}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full"
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.state}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="city">City</label>
                  <select
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full"
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
                <div>
                  <label htmlFor="pin_code">Pin Code</label>
                  <InputField
                    id="pin_code"
                    type="number"
                    name="pin_code"
                    onChange={handleChange}
                    placeholder="Your Pin Code"
                    value={formData.pin_code}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full"
                  />
                </div>
                <div>
                  <label htmlFor="address">Address</label>
                  <InputField
                    id="address"
                    type="text"
                    name="address"
                    onChange={handleChange}
                    placeholder="Your Address"
                    value={formData.address}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full"
                  />
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="interest_in">Requirement</label>
                <select
                  name="interest_in"
                  id="interest_in"
                  value={formData.interest_in}
                  onChange={handleChange}
                  className="rounded-md px-3.5 py-2 shadow-sm w-full"
                >
                  <option value="Solar for Home">Solar for Home</option>
                  <option value="Solar for Office or Society">
                    Solar for Office or Society
                  </option>
                  <option value="Solar for Industry or Organization or Trust">
                    Solar for Industry or Organization or Trust
                  </option>
                </select>
              </div>
              <div className="mt-3">
                <label htmlFor="comments">Comment</label>
                <textarea
                  name="comments"
                  id="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Please enter comments if any"
                  className="rounded-md px-3.5 py-2 shadow-sm w-full sm:col-span-2 mb-3"
                />
              </div>
              <button
                type="submit"
                className="mt-4 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary hover:opacity-80 w-full"
              >
                {isLoading ? "Please wait..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 w-full"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default ContactForm;
