import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import { routes } from "./navigation/routes";

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            {routes.map(({ id, path, Component }) => (
              <>
                <Route key={id} path={path} element={<Component />} />
                <Route path="*" element={<Navigate to="/home" />} />
              </>
            ))}
          </Route>
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
