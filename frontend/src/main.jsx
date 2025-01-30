import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Homepage from "./Homepage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Homepage></Homepage>
  </StrictMode>
);
