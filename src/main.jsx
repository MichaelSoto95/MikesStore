import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./Context/Context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <CartProvider>
    <Router>
      <App />
    </Router>
  </CartProvider>
);
