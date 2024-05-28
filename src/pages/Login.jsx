import { useState, useEffect } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import contactusImage from "../assets/images/login-register.jpeg";
import axios from "axios";

const Login = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  const navigate = useNavigate();
  const [isEmpty, setIsEmpty] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "solar-pro",
    password: "admin123456",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      navigate("/solar-saving-calculator");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post(
        "http://127.0.0.1:8000/api/token/",
        {
          username: formData.username,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        const { access } = res.data;
        localStorage.setItem("accessToken", access);
        // localStorage.setItem("refreshToken", refresh);
        setIsLoading(false);
        navigate("/solar-saving-calculator");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <>
      <Nav showSideNavHandler={showSideNavHandler} />
      <Banner title="Login" />
      <SideNav
        showSideNavHandler={showSideNavHandler}
        showSideNav={showSideNav ? "block" : "none"}
      />
      <section
        className="bg-gray-100 py-8 lg:py-12"
        style={{ backgroundImage: `url(${contactusImage})` }}
      >
        <div className="container mx-auto px-4">
          <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          >
            <div>
              <h1 className="text-3xl font-semibold">Login</h1>
              <br />
              <div>
                <label htmlFor="username">Email / Username</label>
                <InputField
                  id="username"
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Your Username / Email"
                  value={formData.username}
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
            </div>

            <button
              type="submit"
              className="my-4 rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary hover:opacity-80 w-full"
            >
              {isLoading ? "Please Wait..." : "Login"}
            </button>
            <div>
              <h3 className="text-center">
                Don't have an account?
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
