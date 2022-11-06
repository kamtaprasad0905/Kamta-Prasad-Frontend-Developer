import React from "react";
import Header from "./components/shared/Header";
import { Routes, Route, Navigate } from "react-router-dom";
import routes from "./constants/routes";
import Capsules from "./containers/Capsules";
import Rockets from "./containers/Rockets";
import Login from "./containers/Login";
import Register from "./containers/Register";
import { AuthProvider } from "./context/AuthProvider";
import Error from "./pages/Error";

const App = () => {
  const RequireAuth: React.FC<any> = ({ type, children }) => {
    const isLoggedIn: any = localStorage.getItem("admin-auth")?.length;
    return isLoggedIn === 16 ? children : <Navigate to={type === "auth" ? routes.signIn : routes.signIn} replace />;
  };
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route
            path={routes.capsules}
            element={
              <RequireAuth type="auth">
                <Capsules />
              </RequireAuth>
            }
          />
          <Route
            path={routes.rockets}
            element={
              <RequireAuth type="auth">
                <Rockets />
              </RequireAuth>
            }
          />
          <Route path={routes.signIn} element={<Login />} />
          <Route path={routes.register} element={<Register />} />
          <Route path={routes.error} element={<Error />} />
        </Routes>
      </AuthProvider>
    </>
  );
};

export default App;
