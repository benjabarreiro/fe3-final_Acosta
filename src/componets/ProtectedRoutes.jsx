import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import AppContext from "../context/AppContext";

export const ProtectedRoutes = () => {
  const { isLogged } = useContext(AppContext);
  return isLogged ? <Outlet /> : <Navigate to="/login" />;
};
