import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CartContextProvider from "./contexts/CartContext";
import AuthContextProvider from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);

