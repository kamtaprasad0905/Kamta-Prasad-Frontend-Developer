import React from "react";
import { Modal } from "react-bootstrap";
const AppModal = ({ show, onHide, children, title }: any) => {
  return (
    <Modal show={show} onHide={onHide} keyboard={false} centered>
      <Modal.Header className="text-2xl " closeButton>
        Capsule Details
      </Modal.Header>
      <div>
        <Modal.Title>
          <div>{title}</div>
        </Modal.Title>
        <Modal.Body className="ms-2">{children}</Modal.Body>
      </div>
    </Modal>
  );
};

export default AppModal;
