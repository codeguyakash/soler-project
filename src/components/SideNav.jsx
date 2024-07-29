import React, { useEffect, useState } from "react";
import { IoIosClose, IoMdMail } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SideNav = ({ showSideNavHandler, showSideNav }) => {
  const isBlock = showSideNav === "block";
  const [loginStatus, setLoginStatus] = useState(false);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
    try {
      const refresh = localStorage.getItem("refreshToken");
      await axios.post("/api/accounts/api/logout", {
        refresh_token: refresh,
      });
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      alert("Logout Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const refresh = localStorage.getItem("refreshToken");
    if (refresh) {
      setLoginStatus(true);
    } else {
      setLoginStatus(false);
    }
  }, []);

  const publicLinks = [
    { to: "/solar-saving-calculator", label: "Solar Saving Calculator" },
    { to: "/services", label: "Our Services" },
    { to: "/our-products", label: "Our Products" },
    { to: "/enquiry", label: "Enquiry" },
    { to: "/faq", label: "Some FAQs" },
    { to: "/why-go-solar", label: "Why Go Solar" },
    { to: "/muft-bijli-yojana", label: "Muft Bijli Yojana" },
  ];

  const authenticatedLinks = [
    { to: "/service-request", label: "Service Request" },
    { to: "/warranty-card", label: "Warranty Card" },
    { to: "/dashboard", label: "Dashboard" },
  ];

  const loginRegisterLink = { to: "/login", label: "Login/Register" };
  const logoutLink = { label: "Logout", onClick: logoutHandler };

  const combinedLinks = loginStatus
    ? [...publicLinks, ...authenticatedLinks, logoutLink]
    : [...publicLinks, loginRegisterLink];

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
        {combinedLinks.map((link, index) =>
          link.to ? (
            <Link
              key={index}
              to={link.to}
              onClick={link.onClick}
              className="border-b-[0.05rem] border-white text-white py-5 w-full hover:text-black"
            >
              {link.label}
            </Link>
          ) : (
            <div
              key={index}
              onClick={link.onClick}
              className="border-b-[0.05rem] border-white text-white py-5 w-full hover:text-black cursor-pointer"
            >
              {link.label}
            </div>
          )
        )}
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
