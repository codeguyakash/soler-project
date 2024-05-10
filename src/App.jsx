import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Blogs from "./pages/Blogs";
import WhyGoSolar from "./pages/WhyGoSolar";
import SolarSurvey from "./pages/SolarSurvey";
import SolarCalculator from "./pages/SolarCalculator";
import ContactUs from "./pages/ContactUs";
import Faqs from "./pages/Faqs";
import Services from "./pages/Services";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solar-survay" element={<SolarSurvey />} />
          <Route
            path="/solar-saving-calculator"
            element={<SolarCalculator />}
          />
          <Route path="/why-go-solar" element={<WhyGoSolar />} />
          <Route path="/our-products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
