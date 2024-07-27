import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import { Link } from "react-router-dom";
import contactusImage from "../assets/images/login-register.jpeg";

const Admin = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  let username = localStorage.getItem("username");
  let email = localStorage.getItem("email");

  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  return (
    <div>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="Welcome" username={username} email={email} />

      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section
        className="py-8 lg:py-20"
        style={{ backgroundImage: `url(${contactusImage})` }}
      >
        <div className="flex items-center justify-center ">
          <div className="bg-white p-6 rounded-lg">
            <Link to="/maintance-status" className="px-5 py-2 mx-2 rounded-lg">
              Maintance Status
            </Link>
            |
            <Link to="/enquiry-status" className=" px-5 py-2 mx-2 rounded-lg">
              Enquiry Status
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Admin;
