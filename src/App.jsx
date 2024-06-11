import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./pages/Loader";
import Home from "./pages/Home";
import { AuthProvider } from "./Auth/AuthContext"; // Import AuthProvider
import PublicRoute from "./Auth/PublicRoute";
import PrivateRoute from "./Auth/PrivateRoute";

// Lazy loading components
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
const Enquiry = lazy(() => import("./pages/Enquiry"));
const SolarCalculator = lazy(() => import("./pages/SolarCalculator"));
const ServiceRequest = lazy(() => import("./pages/ServiceRequest"));

function App() {
  return (
    <AuthProvider>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicRoute element={<Home />} />} />
            <Route
              path="/why-go-solar"
              element={<PublicRoute element={<WhyGoSolar />} />}
            />
            <Route
              path="/our-products"
              element={<PublicRoute element={<Products />} />}
            />
            <Route
              path="/services"
              element={<PublicRoute element={<Services />} />}
            />
            <Route path="/faq" element={<PublicRoute element={<Faqs />} />} />
            <Route
              path="/muft-bijli-yojana"
              element={<PublicRoute element={<MuftBijli />} />}
            />
            <Route
              path="/login"
              element={<PublicRoute element={<Login />} />}
            />
            <Route
              path="/register"
              element={<PublicRoute element={<Register />} />}
            />
            <Route path="*" element={<PublicRoute element={<NotFound />} />} />

            {/* Private Routes */}
            <Route
              path="/solar-saving-calculator"
              element={<PrivateRoute element={<SolarCalculator />} />}
            />
            <Route
              path="/enquiry"
              element={<PrivateRoute element={<Enquiry />} />}
            />
            <Route
              path="/service-request"
              element={<PrivateRoute element={<ServiceRequest />} />}
            />
            <Route
              path="/warranty-card"
              element={<PrivateRoute element={<WarrantyCard />} />}
            />
            <Route
              path="/dashboard"
              element={<PrivateRoute element={<Admin />} />}
            />
            <Route path="/sam" element={<PrivateRoute element={<Sam />} />} />
          </Routes>
        </Suspense>
      </Router>
    </AuthProvider>
  );
}

export default App;
