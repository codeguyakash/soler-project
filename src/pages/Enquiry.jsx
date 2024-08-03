import { useState } from "react";
import Banner from "../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import contactusImage from "../assets/images/photo-371900.jpeg";
import Form from "../components/Form";


const Enquiry = () => {
  const RequestType = `Enquiry of ${localStorage.getItem("Request-Type")}`;
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

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
        <div className="container mx-auto px-4"></div>
        <Form />
      </section>
    </>
  );
};

export default Enquiry;
