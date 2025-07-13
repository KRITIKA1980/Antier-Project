

// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);     // Logged-in user
//   const [role, setRole] = useState(null);     // "admin" or "customer"
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Load user from localStorage on first render
//   useEffect(() => {
//     const storedUser = localStorage.getItem("authUser");
//     const storedRole = localStorage.getItem("role");

//     if (storedUser && storedRole) {
//       setUser(JSON.parse(storedUser));
//       setRole(storedRole);
//       setIsAuthenticated(true);
//     }
//   }, []);

//   // ✅ Register user
//   const register = (name, email, password, roleType) => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     const existingUser = users.find(
//       (user) => user.email === email && user.role === roleType
//     );
//     if (existingUser) throw new Error("User already exists");

//     const newUser = { name, email, password, role: roleType };
//     users.push(newUser);
//     localStorage.setItem("users", JSON.stringify(users));

//     login(email, password, roleType); // Auto login after signup
//   };

//   // ✅ Login user
//   const login = (email, password, roleType) => {
//     const users = JSON.parse(localStorage.getItem("users")) || [];

//     const matchedUser = users.find(
//       (user) =>
//         user.email === email &&
//         user.password === password &&
//         user.role === roleType
//     );

//     if (!matchedUser) throw new Error("Invalid email or password");

//     setUser(matchedUser);
//     setRole(roleType);
//     setIsAuthenticated(true);
//     localStorage.setItem("authUser", JSON.stringify(matchedUser));
//     localStorage.setItem("role", roleType);
//   };

//   // ✅ Logout
//   const logout = () => {
//     setUser(null);
//     setRole(null);
//     setIsAuthenticated(false);
//     localStorage.removeItem("authUser");
//     localStorage.removeItem("role");
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         role,
//         isAuthenticated,
//         register,
//         login,
//         logout,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;
import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    const storedRole = localStorage.getItem("role");

    if (storedUser && storedRole) {
      setUser(JSON.parse(storedUser));
      setRole(storedRole);
      setIsAuthenticated(true);
    }
  }, []);

  // ✅ Register using backend
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
      const { message } = await response.json();
      throw new Error(message || "Signup failed");
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
      const { message } = await response.json();
      throw new Error(message || "Login failed");
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
      value={{
        user,
        role,
        isAuthenticated,
        register,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
