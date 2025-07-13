// import { createBrowserRouter } from "react-router-dom";
// import CustomerRoutes from "./CustomerRoutes";
// import AdminRoutes from "./AdminRoutes";

// const router = createBrowserRouter([
//   CustomerRoutes,
//   AdminRoutes,
// ]);

// export default router;
// src/routes/CompleteRoutes.jsx

// import { useRoutes } from "react-router-dom";
// import CustomerRoutes from "./CustomerRoutes";
// import AdminRoutes from "./AdminRoutes";

// const CompleteRoutes = () => {
//   const routes = useRoutes([
//     CustomerRoutes,
//     AdminRoutes,
//     { path: "*", element: <h1 className="text-center text-3xl mt-10">404 - Page Not Found</h1> }
//   ]);

//   return routes;
// };

// export default CompleteRoutes;
import { useRoutes } from "react-router-dom";
import CustomerRoutes from "./CustomerRoutes";
import AdminRoutes, { AdminSignupRoute,AdminLoginRoute } from "./AdminRoutes";

const CompleteRoutes = () => {
  const routes = useRoutes([
    CustomerRoutes,
    AdminRoutes,
    AdminSignupRoute,AdminLoginRoute,
     // ✅ include here
    { path: "*", element: <h1 className="text-center text-3xl mt-10">404 - Page Not Found</h1> }
  ]);

  return routes;
};

export default CompleteRoutes;


