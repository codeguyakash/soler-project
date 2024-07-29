import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";

// -------------Public Routes-------------------------
const Products = lazy(() => import("./pages/Products"));
const MuftBijli = lazy(() => import("./pages/MuftBijli"));
const WhyGoSolar = lazy(() => import("./pages/WhyGoSolar"));
const WarrantyCard = lazy(() => import("./pages/WarrantyCard"));
const Faqs = lazy(() => import("./pages/Faqs"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Services = lazy(() => import("./pages/Services"));
const NotFound = lazy(() => import("./pages/NotFound"));

// -------------Private Routes-------------------------
const Sam = lazy(() => import("./pages/Sam"));
const Admin = lazy(() => import("./pages/Admin"));

const EnquiryStatus = lazy(() => import("./pages/EnquiryStatus"));
const MaintanceStatus = lazy(() => import("./pages/MaintanceStatus"));

const Enquiry = lazy(() => import("./pages/Enquiry"));
const SolarCalculator = lazy(() => import("./pages/SolarCalculator"));
const ServiceRequest = lazy(() => import("./pages/ServiceRequest"));

function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-go-solar" element={<WhyGoSolar />} />
          <Route path="/our-products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/muft-bijli-yojana" element={<MuftBijli />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />

          <Route
            path="/solar-saving-calculator"
            element={<SolarCalculator />}
          />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/service-request" element={<ServiceRequest />} />
          <Route path="/warranty-card" element={<WarrantyCard />} />
          <Route path="/dashboard" element={<Admin />} />

          <Route path="/maintance-status" element={<MaintanceStatus />} />
          <Route path="/enquiry-status" element={<EnquiryStatus />} />
          <Route path="/sam" element={<Sam />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
