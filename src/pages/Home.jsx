import React, { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import Nav from "./../components/Nav";
import Carousel from "../components/Carousel";
import SolarAdvantage from "../components/SolarAdvantage";
import OurCustomers from "./../components/OurCustomers";
//images here

import HowToUseSolar from "../components/HowToUseSolar";
import SolarInstallation from "../components/SolarInstallation";
import SolarWork from "../components/SolarWork";
import Footer from "../components/Footer";
import WhyRooftopSolar from "../components/WhyRooftopSolar";
import Services from "../components/Services";
import GetInTouch from "../components/GetInTouch";
import Loader from "./Loader";

const Home = () => {
  const images = [
    "https://res.cloudinary.com/codeguyakash/image/upload/w_1200,h_600,c_fill/enermaxx_solar/files-1717309544577.webp.webp",
    "https://res.cloudinary.com/codeguyakash/image/upload/w_1200,h_600,c_fill/enermaxx_solar/files-1717309544543.jpg.webp",
    "https://res.cloudinary.com/codeguyakash/image/upload/w_1200,h_600,c_fill/enermaxx_solar/files-1717309544566.webp.webp",
    "https://res.cloudinary.com/codeguyakash/image/upload/w_1200,h_600,c_fill/enermaxx_solar/files-1717309544395.jpg.webp",
    "https://res.cloudinary.com/codeguyakash/image/upload/w_1200,h_600,c_fill/enermaxx_solar/files-1717309544590.jpg.webp",
  ];
  // const images = [, solarfive, solarsix, solarseven];
  const [isLoading, setIsLoading] = useState(false);
  const [showSideNav, setShowSideNav] = useState(false);

  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="hero-bg-imgs">
          <Nav showSideNavHandler={showSideNavHandler} />
          <Carousel images={images} showSideNavHandler={showSideNavHandler} />
          <SideNav
            showSideNavHandler={showSideNavHandler}
            showSideNav={showSideNav ? "block" : "none"}
          />
          <SolarAdvantage />
          <HowToUseSolar />
          <WhyRooftopSolar />
          <SolarWork />
          <Services />
          <SolarInstallation />
          {/* <OurCustomers /> */}
          <GetInTouch />
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
