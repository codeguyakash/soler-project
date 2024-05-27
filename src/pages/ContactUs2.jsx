import React, { useState } from "react";
import InputField from "../components/InputField";
import contactus from "../assets/icons/contact_us_re_4qqt.svg";
import Toast from "../components/Toast";

const ContactForm = () => {
  const [isEmpty, setIsEmpty] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contractNo: "",
    companyName: "",
    email: "",
    state: "",
    city: "",
    requirement: "Solar for Home",
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
    const isFormDataEmpty = Object.values(formData).some(
      (value) => value.trim() === ""
    );
    setIsEmpty(isFormDataEmpty);

    if (!isFormDataEmpty) {
      console.log("Form data submitted:", formData);
      alert(JSON.stringify(formData));
    }
  };

  const renderInputField = (label, type, name, placeholder) => (
    <div>
      <label htmlFor={name}>{label}</label>
      <InputField
        id={name}
        type={type}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        value={formData[name]}
        className="rounded-md px-3.5 py-2 shadow-sm w-full"
      />
    </div>
  );

  const renderSelectField = (label, name, options) => (
    <div>
      <label htmlFor={name}>{label}</label>
      <select
        name={name}
        id={name}
        value={formData[name]}
        onChange={handleChange}
        className="rounded-md px-3.5 py-2 shadow-sm w-full"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 to-green-500 py-2 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 w-full lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 sm:max-w-none sm:grid-cols-2">
          <div className="flex items-center justify-center">
            <img
              src={contactus}
              alt="Contact Us"
              width={500}
              className="rounded"
            />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                {renderInputField("Name", "text", "name", "Your Name")}
                {renderInputField(
                  "Phone Number",
                  "text",
                  "contractNo",
                  "Your Phone Number"
                )}
                {renderInputField(
                  "Company Name",
                  "text",
                  "companyName",
                  "Company Name (if not for home)"
                )}
                {renderInputField("Email", "email", "email", "Your Email")}
                {renderSelectField("State", "state", [
                  "Select State",
                  "State1",
                  "State2",
                ])}
                {renderSelectField("City", "city", [
                  "Select City",
                  "City1",
                  "City2",
                ])}
                {renderInputField(
                  "Pin Code",
                  "text",
                  "pinCode",
                  "Your Pin Code"
                )}
                {renderInputField("Address", "text", "address", "Your Address")}
              </div>

              <div className="mt-3">
                {renderSelectField("Requirement", "requirement", [
                  "Solar for Home",
                  "Solar for Office or Society",
                  "Solar for industry or organization or trust",
                ])}
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

              {isEmpty && (
                <Toast message="All Fields Required" className="text-white" />
              )}

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
