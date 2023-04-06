import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const ProtectedRoutes = () => {
  const { loggedIn, appTheme } = useContext(AppContext);
  // revisar
  return loggedIn ? (
    <div className={`app ${appTheme}}`}>
      <Navbar />
      <main className={appTheme}>
        <Outlet />
      </main>
      <Footer />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};
