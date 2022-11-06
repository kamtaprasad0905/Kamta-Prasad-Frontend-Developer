import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../api";
import LoginForm from "../components/LoginForm";
import routes from "../constants/routes";
import { useUserAuth } from "../context/AuthProvider";

const Login = () => {
  const { onLogin }: any = useUserAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const onSignIn = async (email: string, password: string) => {
    const res = await users.signIn({ email, password });
    console.log(res);
    if (res?.error === 0) {
      navigate(routes.capsules);
      onLogin(res.success);
    } else if (res.error === 1) {
      setErrorMessage(res?.msg);
    } else {
      setErrorMessage("Server is not working contact at 6395372945");
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin-auth")?.length;
    if (isLoggedIn === 16) {
      navigate(routes.capsules);
    }
  }, []);
  return (
    <>
      <div className="bg-light d-flex bg-grey vh-100 align-items-center justify-content-center">
        <LoginForm signInCallBack={onSignIn} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      </div>
    </>
  );
};

export default Login;
