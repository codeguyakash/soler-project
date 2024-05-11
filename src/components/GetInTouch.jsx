import React, { useState } from "react";
import { IoCall } from "react-icons/io5";
const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pincode: "",
    isResidential: false,
    isCommercial: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked,
        isResidential: name === "isResidential" ? checked : !checked,
        isCommercial: name === "isCommercial" ? checked : !checked,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-green-500 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 w-full lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-3xl text-center font-bold tracking-tight text-white md:text-6xl py-5">
              Enquiry
            </h2>
            <h2 className="text-3xl font-bold tracking-tight flex items-center gap-5 text-white md:text-6xl">
              <IoCall />
              1800 000 123
            </h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4 ">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="rounded-md  bg-white/5 text-white px-3.5 py-2 shadow-sm  w-full"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="rounded-md bg-white/5 text-white px-3.5 py-2 shadow-sm  w-full"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="rounded-md text-white bg-white/5 px-3.5 py-2 shadow-sm w-full"
                />
                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  placeholder="Your Pincode"
                  className="rounded-md text-white bg-white/5 px-3.5 py-2 shadow-sm w-full"
                />
              </div>
              <div className="flex justify-start gap-5 col-span-2 my-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="residential"
                    name="isResidential"
                    checked={formData.isResidential}
                    onChange={handleChange}
                    className="rounded-md border bg-white/5 shadow-sm w-full"
                  />
                  <label
                    htmlFor="residential"
                    className="ml-2 text-white sm:text-sm"
                  >
                    Residential
                  </label>
                </div>
                <div className="flex items-center justify-start ">
                  <input
                    type="checkbox"
                    id="commercial"
                    name="isCommercial"
                    checked={formData.isCommercial}
                    onChange={handleChange}
                    className="rounded border bg-white/5 text-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-0"
                  />
                  <label
                    htmlFor="commercial"
                    className="ml-2 text-white sm:text-sm"
                  >
                    Commercial
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary hover:opacity-80  w-full"
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

export default GetInTouch;
