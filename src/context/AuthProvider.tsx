import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../api";
import routes from "../constants/routes";

export interface AdminAuthContextInterface {
  token: string | null;
  admin: any;
  onLogin: Function;
  onLogout: Function;
}

const AuthContext = React.createContext<AdminAuthContextInterface | null>(null);

type UserAuthProviderProps = {
  children?: JSX.Element;
};

const AuthProvider: React.FC<UserAuthProviderProps> = ({ children }) => {
  const [token, setToken]: [string | null, Function] = useState(null);
  const [account, setAccount] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (accessToken: string) => {
    const token = accessToken;
    await localStorage.setItem("admin-auth", JSON.stringify({ token }));

    setToken(token);
    setAccount(null);
    setUser(null);
  };

  const handleLogout = async () => {
    await localStorage.removeItem("admin-auth");
    setToken(null);
    navigate(routes.signIn);
  };

  const value = {
    token,
    admin: user,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useUserAuth = () => {
  return React.useContext(AuthContext);
};

export { AuthProvider, useUserAuth };
