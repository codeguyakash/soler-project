import { useState } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import contactusImage from "../assets/images/login-register.jpeg";
import axios from "axios";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import Loader from "../components/Loader";
import toast, { Toaster } from "react-hot-toast";
import PROD_BASE_URL from "../config/config";

const BASE_URL = PROD_BASE_URL || "http://13.201.119.28:5001";

const Register = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    is_customer: false,
    is_channel_partner: false,
    is_employee: false,
  });

  const navigate = useNavigate();

  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${BASE_URL}/api/accounts/register/`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { user } = res.data;
      localStorage.setItem("email", user.email);
      localStorage.setItem("username", user.username);
      toast.success(res.data.message);
      setIsLoading(false);
      navigate("/login");
    } catch (error) {
      const errorData = error.response.data;
      if (errorData.email) {
        toast.error(errorData.email[0]);
      }
      if (errorData.password) {
        toast.error(errorData.password[0]);
      }
      console.log(errorData);
      if (
        errorData.email &&
        errorData.email[0] === "user with this email address already exists."
      ) {
        navigate("/login");
      }
      setIsLoading(false);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
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
        className="bg-gray-100 py-8 lg:py-12 bg-no-repeat bg-cover relative"
        style={{ backgroundImage: `url(${contactusImage})` }}
      >
        {isLoading && <Loader />}
        <Toaster /> {/* Add this to render the toast notifications */}
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
                  className="rounded-md px-3.5 py-2 shadow-sm w-full border outline-none"
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
                  className="rounded-md px-3.5 py-2 shadow-sm w-full border outline-none"
                />
              </div>
              <br />
              <div>
                <label htmlFor="password">Password</label>
                <div className="flex items-center border rounded-md ">
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
              <div className="flex my-5 gap-5 items-center">
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

                {/* <div>
                  <label htmlFor="is_employee">Employee</label>
                  <input
                    id="is_employee"
                    type="checkbox"
                    name="is_employee"
                    onChange={handleChange}
                    checked={formData.is_employee}
                    className="ml-2"
                  />
                </div> */}
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
                <br />
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
    </>
  );
};

export default Register;
