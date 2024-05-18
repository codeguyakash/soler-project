import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
import InputField from "./InputField";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contractNo: "",
    companyName: "",
    email: "",
    state: "",
    city: "",
    pinCode: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-green-500 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 w-full lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center font-bold tracking-tight text-white md:text-6xl py-5">
              Contact Us
            </h2>
            <h2 className="text-3xl font-bold tracking-tight flex items-center gap-5 text-white md:text-6xl">
              <IoCall />
              1800 000 123
            </h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
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
                  <label htmlFor="contractNo">Phone Number</label>
                  <InputField
                    id="contractNo"
                    type="text"
                    name="contractNo"
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    value={formData.contractNo}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full"
                  />
                </div>
                <div>
                  <label htmlFor="companyName">Company Name</label>
                  <InputField
                    id="companyName"
                    type="text"
                    name="companyName"
                    onChange={handleChange}
                    placeholder="Company Name (if not for home)"
                    value={formData.companyName}
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
                    onChange={handleChange}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full"
                  >
                    <option value="">Select State</option>
                    <option value="State1">State1</option>
                    <option value="State2">State2</option>
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
                    <option value="City1">City1</option>
                    <option value="City2">City2</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="pinCode">Pin Code</label>
                  <InputField
                    id="pinCode"
                    type="text"
                    name="pinCode"
                    onChange={handleChange}
                    placeholder="Your Pin Code"
                    value={formData.pinCode}
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
                    placeholder="Your Email"
                    value={formData.address}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full"
                  />
                </div>
                <label htmlFor="comments">Comment</label>
                <textarea
                  name="comments"
                  id="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Please enter comments if any"
                  className="rounded-md px-3.5 py-2 shadow-sm w-full col-span-2"
                />
              </div>
              <button
                type="submit"
                className="mt-4 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary hover:opacity-80 w-full"
              >
                Submit
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
