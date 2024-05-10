import React from "react";
import { IoIosClose, IoMdMail } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import imagefour from "../assets/icons/imagefour.jpg";

const Footer = () => {
  return (
    <div className="bg-primary py-10">
      {/* <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-8 text-white"> */}
      <div className="py-4 px-8 text-white flex items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center">
          <img src={imagefour} alt="logo-here" width={100} />
          <h2 className="mt-5">Solar Private Limited</h2>
        </div>
        <div className="flex flex-col">
          <Link to="/solar-survay" className="  border-white hover:text-black">
            Book Free Solar Survey
          </Link>
          <Link
            to="/solar-saving-calculator"
            className="  border-white hover:text-black"
          >
            Solar Saving Calculator
          </Link>
          <Link to="/our-products" className="  border-white hover:text-black">
            Our Products
          </Link>
          <Link to="/contact-us" className="  border-white hover:text-black">
            Contact Us
          </Link>
          <Link to="/faqs" className="  border-white hover:text-black">
            Some FAQs
          </Link>
          <Link to="/blogs" className="  border-white hover:text-black">
            Blogs
          </Link>
        </div>
      </div>

      <div className="px-8 py-4 text-white flex justify-center items-center">
        <div className="flex gap-4">
          <TiSocialTwitter className="text-white font-light text-3xl hover:text-black" />
          <FaFacebookF className="text-white font-light text-2xl hover:text-black" />
          <FaLinkedin className="text-white font-light text-2xl hover:text-black" />
          <IoMdMail className="text-white font-light text-3xl hover:text-black" />
        </div>
      </div>
      <div className="flex">
        <h1 className="text-white text-center inline-block mx-auto border-b-[1px]">
          &copy; 2024 Solar Private Limited. All rights reserved.
        </h1>
      </div>
    </div>
  );
};

export default Footer;
