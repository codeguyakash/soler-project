import React from "react";
import solarseven from "../assets/images/solar-power-6860359_1280.jpg";

const Services = () => {
  return (
    <div
      className="py-20 h-1/2"
      style={{
        backgroundImage: "linear-gradient(to right, #1e3a8a, white)",
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>

        <div className="flex flex-wrap items-center justify-center">
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
    </div>
  );
};

export default Services;
