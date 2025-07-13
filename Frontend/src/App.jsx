import React from "react";
import { BrowserRouter } from "react-router-dom";
import CompleteRoutes from "./routes/CompleteRoutes";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <CompleteRoutes />
    </BrowserRouter>
  );
};

export default App;