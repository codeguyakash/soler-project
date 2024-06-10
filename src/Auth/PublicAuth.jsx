import { useLocation, Navigate, Outlet } from "react-router-dom";
const PublicAuth = () => {
  const location = useLocation();
  const email = localStorage.getItem("email");

  return email ? (
    <Navigate to="/akash" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};
export default PublicAuth;
