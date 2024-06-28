import { useState, useEffect } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import contactusImage from "../assets/images/login-register.jpeg";
import axios from "axios";

const Register = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    is_customer: false,
    is_channel_partner: false,
    is_employee: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/api/accounts/register/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const { user } = res.data;
        localStorage.setItem("email", user.email);
        localStorage.setItem("username", user.username);
        alert(res.data.message);
        setIsLoading(false);
        navigate("/login");
      })
      .catch((error) => {
        alert(error.response.data.email[0]);
        alert(error.response.data.password[0]);
        console.log(error.response.data.email[0]);
        if (
          error.response.data.email[0] ==
          "user with this email address already exists."
        ) {
          navigate("/login");
        }
        setIsLoading(false);
      });
  };

  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="User Register" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section
        className="bg-gray-100 py-8 lg:py-12 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${contactusImage})` }}
      >
        <div className="container mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          >
            <div>
              <h1 className="text-3xl font-semibold">Register</h1>
              <br />
              <div>
                <label htmlFor="username">Username</label>
                <InputField
                  id="username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Your Username"
                  value={formData.username}
                  className="rounded-md px-3.5 py-2 shadow-sm w-full border"
                />
              </div>
              <br />
              <div>
                <label htmlFor="email">Email</label>
                <InputField
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Your Email"
                  value={formData.email}
                  className="rounded-md px-3.5 py-2 shadow-sm w-full border"
                />
              </div>
              <br />
              <div>
                <label htmlFor="password">Password</label>
                <InputField
                  id="password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Your Password"
                  value={formData.password}
                  className="rounded-md px-3.5 py-2 shadow-sm w-full border"
                />
              </div>
              <div className="flex my-5 gap-5">
                <br />
                <div>
                  <label htmlFor="is_customer">Customer</label>
                  <input
                    id="is_customer"
                    type="checkbox"
                    name="is_customer"
                    onChange={handleChange}
                    checked={formData.is_customer}
                    className="ml-2"
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="is_channel_partner">Channel Partner</label>
                  <input
                    id="is_channel_partner"
                    type="checkbox"
                    name="is_channel_partner"
                    onChange={handleChange}
                    checked={formData.is_channel_partner}
                    className="ml-2"
                  />
                </div>
                <br />
                <div>
                  <label htmlFor="is_employee">Employee</label>
                  <input
                    id="is_employee"
                    type="checkbox"
                    name="is_employee"
                    onChange={handleChange}
                    checked={formData.is_employee}
                    className="ml-2"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="my-4 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary hover:opacity-80 w-full"
            >
              {isLoading ? "Please Wait..." : "Register"}
            </button>
            <div>
              <h3 className="text-center">
                Already have an account?
                <Link
                  to="/login"
                  className="font-semibold text-center mx-auto w-full hover:text-primary"
                >
                  Login
                </Link>
              </h3>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Register;
