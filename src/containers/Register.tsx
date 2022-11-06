import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import users from "../api";
import RegisterForm from "../components/RegisterForm";
import routes from "../constants/routes";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const onRegister = async (email: string, password: string, phone: string, name: string) => {
    const res = await users.signUp({ email, password, phone, name });
    if (res?.error === 0) {
      navigate(routes.signIn);
    } else if (res.error === 1) {
      setErrorMessage(res?.msg);
    } else {
      setErrorMessage("Server is not working contact at 6395372945");
    }
  };

  return (
    <>
      <Col className="bg-light d-flex bg-grey vh-100 align-items-center justify-content-center">
        <RegisterForm registerCallBack={onRegister} errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
      </Col>
    </>
  );
};

export default Register;
