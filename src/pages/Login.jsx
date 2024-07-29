/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import contactusImage from "../assets/images/login-register.jpeg";
import axios from "axios";
import Loader from "../components/Loader";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      toast.error("Please fill in all fields.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post("/api/accounts/api/token/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { access, refresh } = res.data;
      toast.success("Login successful!");
      localStorage.setItem("accessToken", access);
      localStorage.setItem("refreshToken", refresh);

      navigate("/service-request");
    } catch (error) {
      console.error(error.message);
      toast.error("Login failed. Please check your credentials and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="Login" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <Toaster position="top-center" reverseOrder={false} />{" "}
      {/* Add Toaster here */}
      <section
        className="bg-gray-100 py-8 lg:py-12 bg-no-repeat bg-cover relative backdrop-blur-lg"
        style={{ backgroundImage: `url(${contactusImage})` }}
      >
        {isLoading && <Loader />}
        <div className="container mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          >
            <div>
              <h1 className="text-3xl font-semibold">Login</h1>
              <br />
              <div>
                <label htmlFor="email">Email</label>
                <InputField
                  id="email"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  placeholder="Your Email"
                  value={formData.email}
                  className="rounded-md px-3.5 py-2 shadow-sm w-full border outline-none"
                />
              </div>
              <br />
              <div>
                <label htmlFor="password">Password</label>
                <div className="flex items-center border rounded-md">
                  <InputField
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    placeholder="Your Password"
                    value={formData.password}
                    className="rounded-md px-3.5 py-2 shadow-sm w-full outline-none"
                  />
                  <div
                    className="cursor-pointer mr-3"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <FiEye /> : <FiEyeOff />}
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="my-4 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary hover:opacity-80 w-full"
            >
              {isLoading ? "Please Wait..." : "Login"}
            </button>
            <div>
              <h3 className="text-center">
                Don't have an account ? <br />
                <Link
                  to="/register"
                  className="font-semibold text-center mx-auto w-full hover:text-primary"
                >
                  Register
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

export default Login;
