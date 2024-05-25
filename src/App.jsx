import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./pages/Loader";
import Home from "./pages/Home";

// Lazy loading components
const NotFound = lazy(() => import("./pages/NotFound"));
const Products = lazy(() => import("./pages/Products"));
const Blogs = lazy(() => import("./pages/muftBijliYojana"));
const WhyGoSolar = lazy(() => import("./pages/WhyGoSolar"));
const SolarSurvey = lazy(() => import("./pages/SolarSurvey"));
const SolarCalculator = lazy(() => import("./pages/SolarCalculator"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Faqs = lazy(() => import("./pages/Faqs"));
const Services = lazy(() => import("./pages/Services"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
          <Route path="/muft-bijli-yojana" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
