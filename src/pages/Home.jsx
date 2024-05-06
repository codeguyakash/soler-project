import React, { useEffect, useState } from "react";
import SideNav from "../components/SideNav";
import Nav from "./../components/Nav";
import Carousel from "../components/Carousel";
import solarfour from "../assets/images/solar-image-four.webp";
import solartwo from "../assets/images/solar-image-two.webp";
import solarthree from "../assets/images/solar-image-three.webp";

const Home = () => {
  const images = [solarfour, solartwo, solarthree];
  const [showSideNav, setShowSideNav] = useState(false);

  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <>
      <div className="hero-bg-imgs">
        <Nav showSideNavHandler={showSideNavHandler} />
        <Carousel images={images} />
        <SideNav
          showSideNavHandler={showSideNavHandler}
          showSideNav={showSideNav ? "block" : "none"}
        />
      </div>
    </>
  );
};

export default Home;
