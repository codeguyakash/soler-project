import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";

const SolarSurvey = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="From SolarSurvey Page" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <Footer />
    </>
  );
};

export default SolarSurvey;
