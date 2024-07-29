import { useState } from "react";
import SideNav from "../components/SideNav";
import Nav from "./../components/Nav";
import Carousel from "../components/Carousel";
import SolarAdvantage from "../components/SolarAdvantage";
import HowToUseSolar from "../components/HowToUseSolar";
import WhyRooftopSolar from "../components/WhyRooftopSolar";
import SolarWork from "../components/SolarWork";
import Services from "../components/Services";
import SolarInstallation from "../components/SolarInstallation";
import GetInTouch from "../components/GetInTouch";

const Home = () => {
  const images = [
    "https://res.cloudinary.com/codeguyakash/image/upload/w_1200,h_600,c_fill/enermaxx_solar/files-1717309544577.webp.webp",
    "https://res.cloudinary.com/codeguyakash/image/upload/w_1200,h_600,c_fill/enermaxx_solar/files-1717309544543.jpg.webp",
    "https://res.cloudinary.com/codeguyakash/image/upload/w_1200,h_600,c_fill/enermaxx_solar/files-1717309544566.webp.webp",
    "https://res.cloudinary.com/codeguyakash/image/upload/w_1200,h_600,c_fill/enermaxx_solar/files-1717309544395.jpg.webp",
    "https://res.cloudinary.com/codeguyakash/image/upload/w_1200,h_600,c_fill/enermaxx_solar/files-1717309544590.jpg.webp",
  ];
  const [showSideNav, setShowSideNav] = useState(false);

  const toggleSideNav = () => {
    setShowSideNav((prev) => !prev);
  };

  return (
    <>
      <div className="hero-bg-imgs">
        <Nav showSideNavHandler={toggleSideNav} />
        <Carousel images={images} showSideNavHandler={toggleSideNav} />
        <SideNav
          showSideNavHandler={toggleSideNav}
          showSideNav={showSideNav ? "block" : "none"}
        />
        <SolarAdvantage />
        <HowToUseSolar />
        <WhyRooftopSolar />
        <SolarWork />
        <Services />
        <SolarInstallation />
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
