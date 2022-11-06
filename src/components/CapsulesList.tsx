import React, { useState } from "react";
import { Card, Badge, Button, Dropdown, Form, Spinner } from "react-bootstrap";
import moment from "moment";
import AppModal from "./shared/AppModal";
import ViewSpaceDetails from "../containers/ViewCapsule";
const CapsulesList = ({ capsules, loading }: any) => {
  const [show, setShow] = useState<boolean>(false);
  const [id, setId] = useState<any | null>(null);

  const getStatusBackground = (status: string) => {
    switch (status) {
      case "active":
        return "success";
      case "destroyed":
        return "danger";
      case "retired":
        return "secondary";
      default:
        return "warning";
    }
  };

  return (
    <>
      {!(capsules.length === 0) ? (
        <div>
          {loading ? (
            <div className="row mt-3 mx-3">
              {capsules.map((capsule: any) => {
                return (
                  <>
                    <div className=" col-lg-3" key={capsule.capsule_serial}>
                      <Card className="shadow p-3 border-0 mb-5 rounded mx-3">
                        <div className="mt-3 d-flex kd-overlay justify-content-center">
                          <div className="ms-2">Status</div>
                          <div className="ms-auto">
                            <Badge
                              pill
                              bg={getStatusBackground(capsule.status)}
                              className="text-capitalize text-dark text-5xl pill "
                            >
                              {capsule.status}
                            </Badge>
                          </div>
                        </div>

                        <Card.Body className="text-center">
                          <Card.Title className="mb-3">
                            <div className="rounded-circle bg-white text-dark text-4xl mb-3 p-10">
                              {capsule.capsule_serial}
                            </div>
                            Original Launch: {moment(capsule.original_launch).format("DD-MM-YYYY")}
                          </Card.Title>

                          <Card.Text className="h6 mb-3" style={{ color: "#2bdfa7" }}>
                            Type: {capsule.type}
                          </Card.Text>
                          <Dropdown.Divider />
                          <Button
                            variant="success"
                            onClick={() => {
                              setShow(true);
                              setId(capsule.capsule_serial);
                            }}
                          >
                            View Details
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </>
                );
              })}
              <AppModal show={show} onHide={() => setShow(false)}>
                {id && <ViewSpaceDetails id={id} />}
              </AppModal>
            </div>
          ) : (
            <div className="flex justify-center mt-5">
              <Spinner animation="border" className="p-10 text-success" role="status"></Spinner>
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-center mt-5">No Data Found</div>
      )}
    </>
  );
};

export default CapsulesList;
