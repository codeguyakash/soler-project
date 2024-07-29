import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import { Link, useNavigate } from "react-router-dom";
import contactusImage from "../assets/images/login-register.jpeg";

const ServiceRequest = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [serviceType, setServiceType] = useState("");
  const navigate = useNavigate();

  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  const handleServiceChange = (e) => {
    const selectedService = e.target.value;
    setServiceType(selectedService);

    if (selectedService === "installation") {
      localStorage.setItem("Request-Type", "Installation");
      navigate("/enquiry");
    }

    if (selectedService === "maintenance") {
      localStorage.setItem("Request-Type", "Maintenance");
      navigate("/enquiry");
    }
  };

  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="Service Request" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section
        className="bg-gray-100 py-8 lg:py-20"
        style={{ backgroundImage: `url(${contactusImage})` }}
      >
        <div className="container mx-auto px-4">
          <form className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div>
              <label
                htmlFor="serviceType"
                className="block text-lg font-medium text-gray-700"
              >
                Select Service Type
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={serviceType}
                onChange={handleServiceChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
              >
                <option value="" disabled className="text-xl">
                  Select a service
                </option>
                <option value="installation" className="text-xl">
                  Installation Request
                </option>
                <option value="maintenance" className="text-xl">
                  Maintenance Request
                </option>
              </select>
            </div>
          </form>

          <h3 className="text-xl text-gradient-to-r from-blue-900 to-green-500  font-semibold text-center mt-10">
            <Link to="/warranty-card">Download Warranty Card </Link>
          </h3>
        </div>
      </section>
    </>
  );
};

export default ServiceRequest;
