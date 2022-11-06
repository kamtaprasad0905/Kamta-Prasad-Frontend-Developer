import React from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

const Error = () => {
  return (
    <Alert className="vh-100" variant="danger">
      <Alert.Heading className="flex justify-center mt-5">Oh snap! You got an error!</Alert.Heading>
      <p className="flex justify-center">
        Change this and that and try again. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.
      </p>
      <Link to={routes.signIn} className="flex justify-center mt-20">
        <Button variant="success">Go Back</Button>
      </Link>
    </Alert>
  );
};

export default Error;
