import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";

const WhyGoSolar = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="From Why Go Solar Page" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
    </>
  );
};

export default WhyGoSolar;
