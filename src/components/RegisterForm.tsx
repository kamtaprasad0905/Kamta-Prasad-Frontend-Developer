import React, { useState } from "react";
import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

const RegisterForm = ({ registerCallBack, errorMessage }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignIn = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerCallBack(email, password, phone, email);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };
  const validateForm = () => email && password && phone && name;
  return (
    <>
      <Form onSubmit={handleSignIn}>
        {errorMessage && <div className="text-danger">{errorMessage}</div>}
        <Col className="h4 mb-1 fw-normal">Welcome</Col>
        <Row className="justify-content-center">
          <Col className="h3 mb-4 fw-semibold ">Enter your account details</Col>
        </Row>
        <FloatingLabel label="Full Name">
          <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
        </FloatingLabel>
        <FloatingLabel label="Phone Number">
          <Form.Control
            type="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+916395372945"
          />
        </FloatingLabel>
        <FloatingLabel label="Email address">
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
          />
        </FloatingLabel>
        <FloatingLabel label="Password" className="mb-3 position-relative">
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </FloatingLabel>
        <Col className="justify-content-md-center d-flex mt-4">
          <Link to={routes.signIn}>Back to Login</Link>
        </Col>
        <Row className="justify-content-md-center mt-5">
          <Col className="d-grid gap-2">
            <Button type="submit" className="fw-regular" disabled={!validateForm()} variant="success" size="lg">
              {loading ? (
                <div>
                  <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                  Loading...
                </div>
              ) : (
                "Login"
              )}
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default RegisterForm;
