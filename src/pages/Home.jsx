import React, { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import Nav from "./../components/Nav";
import Carousel from "../components/Carousel";
import SolarAdvantage from "../components/SolarAdvantage";
import OurCustomers from "./../components/OurCustomers";
//images here
import solartwo from "../assets/images/solar-image-two.webp";
import solarthree from "../assets/images/solar-image-three.webp";
import solarfour from "../assets/images/solar-image-four.webp";
import solarfive from "../assets/images/bg.jpg";
import solarsix from "../assets/images/solar-six.jpg";
import solarseven from "../assets/images/solarseven.jpg";
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
    solartwo,
    solarthree,
    solarfour,
    solarfive,
    solarsix,
    solarseven,
    solartwo,
    solarthree,
    solarfour,
    solarfive,
    solarsix,
    solarseven,
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [showSideNav, setShowSideNav] = useState(false);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
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
