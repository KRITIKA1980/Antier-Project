/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-useless-catch */

import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    const storedRole = localStorage.getItem("role");

    if (storedUser && storedRole) {
      setUser(JSON.parse(storedUser));
      setRole(storedRole);
      setIsAuthenticated(true);
    }
  }, []);

  // Utility: safely parse error message from backend
  const parseErrorMessage = async (response) => {
    try {
      const data = await response.json();
      return data?.message || "Something went wrong.";
    } catch {
      return "Server error. Please try again.";
    }
  };

  // Register
  const register = async (name, email, password, roleType) => {
    try {
      const endpoint =
        roleType === "admin" ? "/api/admin/signup" : "/api/customer/signup";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const message = await parseErrorMessage(response);
        throw new Error(message);
      }

      const data = await response.json();
      setUser(data);
      setRole(roleType);
      setIsAuthenticated(true);
      localStorage.setItem("authUser", JSON.stringify(data));
      localStorage.setItem("role", roleType);
    } catch (error) {
      throw error;
    }
  };

  // Login
  const login = async (email, password, roleType) => {
    try {
      const endpoint =
        roleType === "admin" ? "/api/admin/login" : "/api/customer/login";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const message = await parseErrorMessage(response);
        throw new Error(message);
      }

      const data = await response.json();
      setUser(data);
      setRole(roleType);
      setIsAuthenticated(true);
      localStorage.setItem("authUser", JSON.stringify(data));
      localStorage.setItem("role", roleType);
    } catch (error) {
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    setIsAuthenticated(false);
    localStorage.removeItem("authUser");
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider
      value={{ user, role, isAuthenticated, register, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;