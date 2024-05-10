import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";

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
       <section className="bg-gray-100 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                under maintenance...
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WhyGoSolar;
