import React from "react";
import solarseven from "../assets/images/solar-power-6860359_1280.jpg";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-blue-900 to-green-500 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">
          Our Services
        </h2>

        <div className="flex flex-wrap items-center justify-center ">
          <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0">
            <div className="p-8">
              <p className="text-xl font-semibold text-white mb-4">
                Feasibility and Advisory
              </p>
              <p className="text-lg text-gray-300 mb-4">
                Before embarking on the project and committing significant
                funds, it's wise to consult with experts in the field to develop
                a comprehensive framework. This ensures the installation of a
                cost-effective and technically superior project.
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Site selection and feasibility analysis</li>
                <li>Plant layouts</li>
                <li>Optimal pitch selection to minimize shadow impact</li>
                <li>Proper tilt selection for maximum yield</li>
                <li>Grid connectivity analysis</li>
                <li>
                  Financial modeling of the project, including ROI estimation
                </li>
                <li>Preparation of Detailed Project Report (DPR)</li>
                <li>Project timeline development</li>
              </ul>
              <br />
              <Link
                to="/services"
                className=" text-white px-3.5 py-2.5 font-semibold bg-green-700 rounded-md mt-5"
              >
                Learn more...
              </Link>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src={solarseven}
              alt="Services Photo"
              className="rounded"
              width={1000}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6 w-full"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Services;
