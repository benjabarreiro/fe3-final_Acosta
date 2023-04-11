import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ThemeContext from "../context/ThemeContext";

export default function MainLayout({ children }) {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div className={`app ${appTheme}`}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
