

import AdminLayout from "../layouts/AdminLayout";
import AdminDashboard from "../pages/admin/AdminDashboard";
import Orders from "../pages/admin/Orders";
import ProtectedRoute from "./ProtectedRoute";
import AdminLogin from "../pages/admin/Login"

import AdminSignup from "../pages/admin/AdminSignup"; // ✅ Import this

const AdminRoutes = {
  path: "/admin",
  element: (
    <ProtectedRoute>
      <AdminLayout />
    </ProtectedRoute>
  ),
  children: [
    { path: "dashboard", element: <AdminDashboard /> },
    { path: "orders", element: <Orders /> },
  ],
};

// ✅ Export another route outside protected layout
export const AdminSignupRoute = {
  path: "/admin-signup",
  element: <AdminSignup />,
};

export const AdminLoginRoute = {
  path: "/admin-login",
  element: < AdminLogin/>,
};

export default AdminRoutes;



