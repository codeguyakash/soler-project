import React from "react";
import { IoIosClose, IoMdMail } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import imagefour from "../assets/icons/imagefour.jpg";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    // <div className="bg-primary py-10">
    //   {/* <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-8 text-white"> */}
    //   <div className="py-4 px-8 text-white flex items-center justify-center border">
    //     <div className="flex flex-col items-center justify-center border">
    //       <img src={imagefour} alt="logo-here" width={200} />
    //     </div>
    //     <div className="px-8 py-4 text-white flex justify-center items-center border flex-col">
    //       <div>
    //         <img src={imagefour} alt="logo-here" width={100} />
    //       </div>
    //
    //     </div>
    //     <div className="flex flex-col border">
    //       <Link to="/solar-survay" className="  border-white hover:text-black">
    //         Book Free Solar Survey
    //       </Link>
    //       <Link
    //         to="/solar-saving-calculator"
    //         className="  border-white hover:text-black"
    //       >
    //         Solar Saving Calculator
    //       </Link>
    //       <Link to="/our-products" className="  border-white hover:text-black">
    //         Our Products
    //       </Link>
    //       <Link to="/contact-us" className="  border-white hover:text-black">
    //         Contact Us
    //       </Link>
    //       <Link to="/faqs" className=" border-white hover:text-black">
    //         Some FAQs
    //       </Link>
    //       <Link to="/blogs" className=" border-white hover:text-black">
    //         Blogs
    //       </Link>
    //     </div>
    //   </div>
    //   <div className="flex">
    //     <h1 className="text-white text-center inline-block mx-auto">
    //       &copy; 2024 Solar Private Limited. All rights reserved.
    //     </h1>
    //   </div>
    // </div>

    <div className="bg-primary relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-1 p-10">
            <div className="mb-4">
              <h1 className="text-6xl text-white font-bold">
                <Link to="/">EnerMaxX</Link>
              </h1>
              <p className="text-white text-sm mt-2">
                A rooftop solar photovoltaic (PV) system can either cater to the
                mini-power needs of a building or feed excess electricity back
                into the grid. While the installation of such a system is open
                to anyone, its size greatly depends on factors like available
                space, property's electricity consumption, and the owner's
                investment capacity and inclination
                <br />
                <br />
                <Link href="#" className="text-blue-300">
                  EnerMaxX Private Ltd, 2024
                </Link>
              </p>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 bg-green-700 flex items-center p-10">
            <div className="flex flex-col">
              <Link
                to="/solar-survay"
                className=" text-white border-white hover:text-black"
              >
                Book Free Solar Survey
              </Link>

              <Link
                to="/solar-saving-calculator"
                className=" text-white border-white hover:text-black"
              >
                Solar Saving Calculator
              </Link>
              <Link
                to="/services"
                className=" text-white border-white hover:text-black"
              >
                Our Services
              </Link>
              <Link
                to="/our-products"
                className=" text-white border-white hover:text-black"
              >
                Our Products
              </Link>
              <Link
                to="/contact-us"
                className=" text-white border-white hover:text-black"
              >
                Contact Us
              </Link>
              <Link
                to="/faq"
                className="text-white border-white hover:text-black"
              >
                Some FAQs
              </Link>
              <Link
                to="/why-go-solar"
                className="text-white border-white hover:text-black"
              >
                Why Go Solar
              </Link>
              <Link
                to="/muft-bijli-yojana"
                className="text-white border-white hover:text-black"
              >
                Muft Bijli Yojana
              </Link>
            </div>
          </div>

          <div className="col-span-1 md:col-span-1 flex items-end justify-center p-10">
            <div className="mt-5 md:mt-0 text-right">
              <div className="mb-4">
                <div className="flex gap-4  items-start flex-col">
                  <div>
                    <IoCall className="text-white text-start text-6xl border rounded-full p-2 font-bold" />

                    <h2 className="text-white text-start text-4xl font-bold">
                      1800 1000 1234
                    </h2>
                    <h2 className="text-white text-start">
                      EnerMaxX Private Ltd <br />
                      New Delhi 123456
                    </h2>
                  </div>
                  <div className="flex items-start justify-start gap-2">
                    <TiSocialTwitter className="text-primary font-light text-5xl rounded-full border-4 cursor-pointer bg-white hover:opacity-85 " />
                    <FaFacebookF className="text-primary font-light text-5xl rounded-full border-4 cursor-pointer bg-white hover:opacity-85 " />
                    <FaLinkedin className="text-primary font-light text-5xl rounded-full border-4 cursor-pointer bg-white hover:opacity-85 " />
                    <IoMdMail className="text-primary font-light text-5xl rounded-full border-4 cursor-pointer bg-white hover:opacity-85 " />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <ul className="flex justify-end">
                  <li className="mr-4">
                    <Link to="/" className="text-blue-300">
                      Legal Disclaimer
                    </Link>
                  </li>
                  <li className="mr-4">
                    <Link to="/" className="text-blue-300">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mr-4">
                    <Link to="/" className="text-blue-300">
                      Terms of Use
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
