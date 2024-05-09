import React from "react";
import { IoIosClose, IoMdMail } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary h-96 py-10">
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 px-8 text-white">
        <div className="flex flex-col">
          <Link to="/solar-survay" className="  border-white hover:text-black">
            Book Your Free Solar Survey
          </Link>
          <Link
            to="/calculate-your-saving"
            className="  border-white hover:text-black"
          >
            Calculate Your Saving
          </Link>
          <Link
            to="/our-products-range"
            className="  border-white hover:text-black"
          >
            Our Products Range
          </Link>
          <Link to="/solar-survay" className="  border-white hover:text-black">
            Book Your Free Solar Survey
          </Link>
          <Link
            to="/calculate-your-saving"
            className="  border-white hover:text-black"
          >
            Calculate Your Saving
          </Link>
          <Link
            to="/our-products-range"
            className="  border-white hover:text-black"
          >
            Our Products Range
          </Link>
          <Link to="/our-customers" className="  border-white hover:text-black">
            Our Customers
          </Link>
          <Link to="/our-customers" className="  border-white hover:text-black">
            Our Customers
          </Link>
        </div>
        <div className="flex flex-col">
          <Link to="/contact-us" className="  border-white hover:text-black">
            Contact Us
          </Link>
          <Link to="/faq" className="  border-white hover:text-black">
            Some FAQs
          </Link>
          <Link to="/why-go-solar" className="  border-white hover:text-black">
            Why Go Solar
          </Link>
          <Link to="/blog" className="  border-white hover:text-black">
            Blogs
          </Link>
          <Link to="/solar-survay" className="  border-white hover:text-black">
            Book Your Free Solar Survey
          </Link>
          <Link
            to="/calculate-your-saving"
            className="  border-white hover:text-black"
          >
            Calculate Your Saving
          </Link>
          <Link
            to="/our-products-range"
            className="  border-white hover:text-black"
          >
            Our Products Range
          </Link>
          <Link to="/our-customers" className="  border-white hover:text-black">
            Our Customers
          </Link>
        </div>
        <div className="flex flex-col">
          <Link to="/contact-us" className="  border-white hover:text-black">
            Contact Us
          </Link>
          <Link to="/faq" className="  border-white hover:text-black">
            Some FAQs
          </Link>
          <Link to="/why-go-solar" className="  border-white hover:text-black">
            Why Go Solar
          </Link>
          <Link to="/blog" className="  border-white hover:text-black">
            Blogs
          </Link>
          <Link to="/contact-us" className="  border-white hover:text-black">
            Contact Us
          </Link>
          <Link to="/faq" className="  border-white hover:text-black">
            Some FAQs
          </Link>
          <Link to="/why-go-solar" className="  border-white hover:text-black">
            Why Go Solar
          </Link>
          <Link to="/blog" className="  border-white hover:text-black">
            Blogs
          </Link>
        </div>
        <div className="flex flex-col">
          <Link to="/solar-survay" className="  border-white hover:text-black">
            Book Your Free Solar Survey
          </Link>
          <Link
            to="/calculate-your-saving"
            className="  border-white hover:text-black"
          >
            Calculate Your Saving
          </Link>
          <Link to="/solar-survay" className="  border-white hover:text-black">
            Book Your Free Solar Survey
          </Link>
          <Link
            to="/calculate-your-saving"
            className="  border-white hover:text-black"
          >
            Calculate Your Saving
          </Link>
          <Link to="/solar-survay" className="  border-white hover:text-black">
            Book Your Free Solar Survey
          </Link>
          <Link
            to="/calculate-your-saving"
            className="  border-white hover:text-black"
          >
            Calculate Your Saving
          </Link>
          <Link
            to="/our-products-range"
            className="  border-white hover:text-black"
          >
            Our Products Range
          </Link>
          <Link to="/our-customers" className="  border-white hover:text-black">
            Our Customers
          </Link>
        </div>
      </div>
      <div className="px-8 py-4 text-white flex justify-between items-center">
        <div className="flex gap-4">
          <TiSocialTwitter className="text-white font-light text-3xl hover:text-black" />
          <FaFacebookF className="text-white font-light text-2xl hover:text-black" />
          <FaLinkedin className="text-white font-light text-2xl hover:text-black" />
          <IoMdMail className="text-white font-light text-3xl hover:text-black" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
