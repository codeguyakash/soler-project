import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GetInTouch from "./../components/GetInTouch";
import contactusImage from "../assets/images/contactus.jpg";
import Form from "./../components/Form";

const ContactUs = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="Contact Us" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section
        className="bg-gray-100 py-20 px-10 relative bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${contactusImage})` }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-5xl py-5 text-center text-white font-bold">
                Say Hey 👋
              </h2>
            </div>
          </div>
          {/* <div className="absolute bg-black w-full h-full opacity-45"></div> */}
        </div>
        <Form />
        {/* <GetInTouch /> */}
      </section>
      <Footer />
    </>
  );
};

export default ContactUs;
