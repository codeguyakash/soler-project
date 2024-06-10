import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./pages/Loader";
import Home from "./pages/Home";
// import { AuthProvider } from "./Auth/AuthContext";
// import PublicAuth from "./Auth/PublicAuth";
// import RequireAuth from "./Auth/RequireAuth";

// Lazy loading components
const NotFound = lazy(() => import("./pages/NotFound"));
const Register = lazy(() => import("./pages/Register"));
const WarrantyCard = lazy(() => import("./pages/WarrantyCard"));
const Login = lazy(() => import("./pages/Login"));
const Products = lazy(() => import("./pages/Products"));
const MuftBijli = lazy(() => import("./pages/MuftBijli"));

const WhyGoSolar = lazy(() => import("./pages/WhyGoSolar"));
const SolarSurvey = lazy(() => import("./pages/SolarSurvey"));
const SolarCalculator = lazy(() => import("./pages/SolarCalculator"));
const ServiceRequest = lazy(() => import("./pages/ServiceRequest"));
const AdminDashboard = lazy(() => import("./pages/Admin"));
const Enquiry = lazy(() => import("./pages/Enquiry"));
const Faqs = lazy(() => import("./pages/Faqs"));
const Services = lazy(() => import("./pages/Services"));

function App() {
  return (
    // <AuthProvider>
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* <Route element={<PublicAuth />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/solar-survay" element={<SolarSurvey />} />
          <Route path="/why-go-solar" element={<WhyGoSolar />} />
          <Route path="/our-products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<Faqs />} />
          <Route path="/muft-bijli-yojana" element={<MuftBijli />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
          {/* </Route> */}
          {/* Login required for access this routes */}
          {/* <Route element={<RequireAuth />}> */}
          <Route
            path="/solar-saving-calculator"
            element={<SolarCalculator />}
          />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/service-request" element={<ServiceRequest />} />
          <Route path="/warranty-card" element={<WarrantyCard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          {/* </Route> */}
        </Routes>
      </Suspense>
    </Router>
    // </AuthProvider>
  );
}

export default App;
