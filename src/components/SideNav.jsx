import React from "react";
import { IoIosClose, IoMdMail } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const SideNav = ({ showSideNavHandler, showSideNav }) => {
  const isBlock = showSideNav === "block";
  return (
    <div
      className={`bg-primary w-72 h-screen fixed top-0 right-0 z-50 opacity-50 ${
        isBlock ? "animate-fade-left" : "animate-fade-right"
      }`}
      style={{ display: showSideNav }}
    >
      <div className="mt-5 mx-2 cursor-pointer">
        <IoIosClose
          className="text-white font-light text-3xl hover:text-black"
          onClick={showSideNavHandler}
        />
      </div>
      <div className="flex flex-col items-center justify-center px-3">
        <Link
          to="/solar-survay"
          className="border-b-[0.05rem] border-white text-white py-5 w-full hover:text-black"
        >
          Book Your Free Solar Survey
        </Link>
        <Link
          to="/calculate-your-saving"
          className="border-b-[0.05rem] border-white text-white py-5 w-full hover:text-black"
        >
          Calculate Your Saving
        </Link>
        <Link
          to="/our-products-range"
          className="border-b-[0.05rem] border-white text-white py-5 w-full hover:text-black"
        >
          Our Products Range
        </Link>
        <Link
          to="/our-customers"
          className="border-b-[0.05rem] border-white text-white py-5 w-full hover:text-black"
        >
          Our Customers
        </Link>
        <Link
          to="/contact-us"
          className="border-b-[0.05rem] border-white text-white py-5 w-full hover:text-black"
        >
          Contact Us
        </Link>
        <Link
          to="/faq"
          className="border-b-[0.05rem] border-white text-white py-5 w-full hover:text-black"
        >
          Some FAQs
        </Link>
        <Link
          to="/why-go-solar"
          className="border-b-[0.05rem] border-white text-white py-5 w-full hover:text-black"
        >
          Why Go Solar
        </Link>
        <Link
          to="/blog"
          className="border-b-[0.05rem] border-white text-white py-5 w-full hover:text-black"
        >
          Blogs
        </Link>
        <div className="my-5 cursor-pointer flex items-center justify-center gap-5">
          <TiSocialTwitter className="text-white font-light text-3xl hover:text-black" />
          <FaFacebookF className="text-white font-light text-2xl hover:text-black" />
          <FaLinkedin className="text-white font-light text-2xl hover:text-black" />
          <IoMdMail className="text-white font-light text-3xl hover:text-black" />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
