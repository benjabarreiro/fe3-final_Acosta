import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { Login, routes } from "./navigation/routes";
import { ProtectedRoutes } from "./componets/ProtectedRoutes";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            {routes.map(({ id, path, Component }) => (
              <Route key={id} path={path} element={<Component />} />
            ))}
            {/* <Route path="*" element={<Navigate to="/home" />} /> */}
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
