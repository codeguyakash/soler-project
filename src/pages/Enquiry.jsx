import { useState, useEffect } from "react";
import Banner from "../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import contactusImage from "../assets/images/photo-371900.jpeg";
import Form from "../components/Form";
import { useNavigate } from "react-router-dom";

const Enquiry = () => {
  const RequestType = `Enquiry of ${localStorage.getItem("Request-Type")}`;
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title={RequestType} />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section
        className="bg-gray-100 p-2 md:py-20 md:px-10 relative bg-cover bg-no-repeat backdrop-blur-lg "
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

export default Enquiry;
