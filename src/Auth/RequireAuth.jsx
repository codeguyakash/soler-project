import { Outlet, useLocation, Navigate } from "react-router-dom";
const RequireAuth = () => {
  const location = useLocation();
  const email = localStorage.getItem("email");

  return email ? (
    <Outlet />
  ) : (
    <Navigate to="/register" state={{ from: location }} replace />
  );
};
export default RequireAuth;
