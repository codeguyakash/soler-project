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
  const [showSideNav, setShowSideNav] = useState(false);

  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <>
      <div className="hero-bg-imgs">
        <Nav showSideNavHandler={showSideNavHandler} />
        <Carousel images={images} showSideNavHandler={showSideNavHandler} />
        <SideNav
          showSideNavHandler={showSideNavHandler}
          showSideNav={showSideNav ? "block" : "none"}
        />
        <SolarAdvantage />
        <HowToUseSolar />
        <OurCustomers />
      </div>
    </>
  );
};

export default Home;
