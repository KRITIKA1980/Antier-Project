// import CustomerLayout from "../layouts/CustomerLayout";
// import Home from "../pages/customer/Home";
// import ProductList from "../pages/customer/ProductList";
// import ProductDetails from "../pages/customer/ProductDetails";
// import Cart from "../pages/customer/Cart";
// import Login from "../pages/Login"; 
// import CustomerLogin from "../pages/CustomerLogin"; 
// import CustomerSignup from '../pages/customer/CustomerSignup';


// const CustomerRoutes = {
//   path: "/",
//   element: <CustomerLayout />,
//   children: [
//     { path: "", element: <Home /> },
//     { path: "products", element: <ProductList /> },
//     { path: "products/:id", element: <ProductDetails /> },
//     { path: "cart", element: <Cart /> },
//     { path: "login", element: <Login /> },
//     { path: "customer-login", element: <CustomerLogin /> }, 
//      { path: "/register", element: <CustomerSignup /> },
//   ],
// };

// export default CustomerRoutes;
// src/routes/CustomerRoutes.jsx


// Pages under src/pages/customer/
import CustomerLayout from "../layouts/CustomerLayout";
import Home from "../pages/customer/Home";
import ProductList from "../pages/customer/ProductList";
import ProductDetails from "../pages/customer/ProductDetails";
import Cart from "../pages/customer/Cart";
import CustomerLogin from "../pages/customer/CustomerLogin";

import CustomerSignup from "../pages/customer/CustomerSignup";
import BuyNow from "../pages/customer/BuyNow"; // ✅ Import BuyNow page


const CustomerRoutes = {
  path: "/",
  element: <CustomerLayout />,
  children: [
    { path: "", element: <Home /> },
    { path: "products", element: <ProductList /> },
    { path: "products/:id", element: <ProductDetails /> },
    { path: "cart", element: <Cart /> },
    { path: "customer-login", element: <CustomerLogin /> },
    { path: "customer-register", element: <CustomerSignup /> },
    { path: "buy-now/:id", element: <BuyNow /> },


  ],
};

export default CustomerRoutes;


