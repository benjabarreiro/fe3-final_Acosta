import { Navigate, Outlet } from "react-router";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import MainLayout from "./MainLayout";

export const ProtectedRoutes = () => {
  const { isLogged } = useContext(AuthContext);

  return isLogged ? (
    <MainLayout>
      <Outlet />
    </MainLayout>
  ) : (
    <Navigate to="/login" />
  );
};
