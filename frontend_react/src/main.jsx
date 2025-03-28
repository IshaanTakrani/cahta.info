import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ButtonTest from "./Button.jsx";
import { extendTheme, CssVarsProvider } from "@mui/joy/styles";
import Navbar from "./Button.jsx";
import Homepage from "./Homepage.jsx";
import AboutUs from "./AboutUs.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssVarsProvider>
      <Homepage></Homepage>
      <AboutUs></AboutUs>
      {/* <Contact></Contact> */}
      {/* <Footer></Footer> */}
    </CssVarsProvider>
  </StrictMode>
);
