
// import { useContext } from "react";
// import { Navigate } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";

// const ProtectedRoute = ({ children }) => {
//   const { isAdmin } = useContext(AuthContext);

//   if (!isAdmin) {
//     return <Navigate to="/admin-login" />;
//   }

//   return children;
// };

// export default ProtectedRoute;

import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { role, isAuthenticated } = useContext(AuthContext);

  // Only allow access if user is authenticated and is admin
  if (!isAuthenticated || role !== "admin") {
    return <Navigate to="/admin-login" replace />;
  }

  return children;
};

export default ProtectedRoute;
