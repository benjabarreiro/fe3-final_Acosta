import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AppContext from "../context/AppContext";

export default function MainLayout({ children }) {
  const { appTheme } = useContext(AppContext);

  return (
    <div className={`app ${appTheme}}`}>
      <Navbar />
      <main className={appTheme}>{children}</main>
      <Footer />
    </div>
  );
}
