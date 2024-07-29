import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import solarseven from "../assets/images/solar-power-6860359_1280.jpg";
import installationOne from "../assets/images/installation-solar.jpg";
import installationTwo from "../assets/images/installation-solar2.jpg";
import backgroundImage from "../assets/images/bg-line-2.png";

const Services = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner
        title="Powering Tomorrow with Sustainable Energy"
        tagline="Empowering a Brighter Future through Innovative Solar Technology"
      />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />

      <section
        className="bg-gray-100 py-16 lg:py-24 bg-cover"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Service's
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-12 lg:grid-cols-2">
              <div className="flex">
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Feasibility and Advisory
                  </h3>
                  <p>
                    Before embarking on the project and committing significant
                    funds, it's wise to consult with experts in the field to
                    develop a comprehensive framework. This ensures the
                    installation of a cost-effective and technically superior
                    project.
                  </p>
                  <br />

                  <ul className="list-disc list-inside text-black-800">
                    <li>Site selection and feasibility analysis</li>
                    <li>Plant layouts</li>
                    <li>Optimal pitch selection to minimize shadow impact</li>
                    <li>Proper tilt selection for maximum yield</li>
                    <li>Grid connectivity analysis</li>
                    <li>
                      Financial modeling of the project, including ROI
                      estimation
                    </li>
                    <li>Preparation of Detailed Project Report (DPR)</li>
                    <li>Project timeline development</li>
                  </ul>
                </div>
              </div>

              <div className="flex">
                <img
                  src={solarseven}
                  alt="commercial-solar"
                  className="bg-white shadow-lg rounded-lg"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12">
            <div className="border rounded-lg p-6 bg-white shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Detailed Design & Engineering
              </h3>
              <p className="text-gray-600 mb-6">
                Through ENERMAXX's comprehensive planning and precise
                engineering, achieving enduring longevity and optimal
                performance for the solar plant is readily attainable.
              </p>
              <ul className="text-gray-700">
                <li className="mb-4">Plant Layout & General Design</li>
                <li className="mb-4">Electrical Design</li>
                <li>Civil & Structural Design</li>
              </ul>
            </div>

            <div className="border rounded-lg bg-white shadow-lg">
              <img
                src={installationOne}
                alt="imagehere"
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="border rounded-lg bg-white shadow-lg">
              <img
                src={installationTwo}
                alt="imagehere"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
