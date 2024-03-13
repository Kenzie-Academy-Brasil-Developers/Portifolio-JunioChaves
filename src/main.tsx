import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./style/Global";
import { Home } from "./pages/home";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle>
      <NavBar />
      <Home />
      <Footer />
    </GlobalStyle>
  </React.StrictMode>
);