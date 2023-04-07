import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import MainLayout from "./MainLayout";

export const ProtectedRoutes = () => {
  const { isLogged } = useContext(AppContext);

  return isLogged ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" />
  );
};
