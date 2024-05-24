import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import GetInTouch from "./../components/GetInTouch";
import contactusImage from "../assets/images/photo-371900.jpeg";
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
        className="bg-gray-100 py-20 px-10 relative bg-cover bg-no-repeat backdrop-blur-lg "
        style={{ backgroundImage: `url(${contactusImage})` }}
      >
        <div className="container mx-auto px-4">
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
