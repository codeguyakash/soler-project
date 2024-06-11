import React, { createContext, useState, useEffect } from "react";
import { getCookie } from "../utils/cookieUtils"; // Adjust the import path

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const csrftoken = getCookie("csrftoken");
    const email = localStorage.getItem("email");
    if (csrftoken && email) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
