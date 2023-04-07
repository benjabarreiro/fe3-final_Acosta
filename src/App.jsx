import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { DentistsProvider } from "./context/DentistsContext";
import { Login, routes } from "./navigation/routes";
import { ProtectedRoutes } from "./componets/ProtectedRoutes";

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <DentistsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<ProtectedRoutes />}>
                {routes.map(({ id, path, Component }) => (
                  <Route key={id} path={path} element={<Component />} />
                ))}
                <Route path="*" element={<Navigate to="/home" />} />
              </Route>
              <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
          </BrowserRouter>
        </DentistsProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
