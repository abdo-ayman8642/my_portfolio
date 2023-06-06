import React from "react";
import ReactDOM from "react-dom/client";
import "./css/base.css";
import "./css/main.css";
import "./css/vendor.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);