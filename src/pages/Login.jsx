import { useState, useEffect } from "react";
import Banner from "./../components/common/Banner";
import SideNav from "../components/SideNav";
import Nav from "../components/Nav";
import Footer from "./../components/Footer";
import InputField from "../components/InputField";
import { Link, useNavigate } from "react-router-dom";
import contactusImage from "../assets/images/login-register.jpeg";
import axios from "axios";
import { getCookie } from "./../utils/cookieUtils";

const Login = () => {
  const [showSideNav, setShowSideNav] = useState(false);
  const showSideNavHandler = () => {
    setShowSideNav(!showSideNav);
  };
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  useEffect(() => {
    const isCookie = getCookie("sessionid");
    if (isCookie !== null) {
      navigate("/service-request");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.post("/api/accounts/login/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.data);
      navigate("/service-request");
      document.cookie = `csrftoken=${csrftoken}; path=/;`;
      document.cookie = `sessionid=${sessionid}; path=/;`;
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
    }
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
        className="bg-gray-100 py-8 lg:py-12 bg-no-repeat bg-cover"
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
                <label htmlFor="email">Email</label>
                <InputField
                  id="email"
                  type="text"
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
