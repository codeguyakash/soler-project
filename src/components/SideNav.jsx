import React, { useEffect, useState, useCallback } from "react";
import { IoIosClose, IoMdMail } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const SideNav = ({ showSideNavHandler, showSideNav }) => {
  const isBlock = showSideNav === "block";
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");
    setLoginStatus(!email);
  }, []);

  const logoutHandler = useCallback(() => {
    localStorage.removeItem("email");
    alert("Logout Successfully");
    navigate("/");
  }, [navigate]);

  const links = [
    { to: "/solar-saving-calculator", label: "Solar Saving Calculator" },
    { to: "/services", label: "Our Services" },
    { to: "/our-products", label: "Our Products" },
    { to: "/enquiry", label: "Enquiry" },
    { to: "/faq", label: "Some FAQs" },
    { to: "/why-go-solar", label: "Why Go Solar" },
    { to: "/muft-bijli-yojana", label: "Muft Bijli Yojana" },
    loginStatus
      ? { to: "/login", label: "Login/Register" }
      : { label: "Logout", onClick: logoutHandler },
  ];

  return (
    <div
      className={`bg-primary backdrop-blur-lg1 w-72 h-screen fixed top-0 right-0 z-50 opacity-50 animate-delay-75 ${
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
        {/* Map over links array to render Link elements */}
        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            onClick={link.onClick}
            className="border-b-[0.05rem] border-white text-white py-5 w-full hover:text-black"
          >
            {link.label}
          </Link>
        ))}
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
