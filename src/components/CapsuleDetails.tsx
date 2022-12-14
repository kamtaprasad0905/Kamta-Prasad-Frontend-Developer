import moment from "moment";
import React from "react";
import { Spinner, Table } from "react-bootstrap";

const CapsuleDetails = ({ capsuleDetail, loading }: any) => {
  console.log(
    capsuleDetail.missions.map((e: any) => {
      return e.name;
    })
  );
  return (
    <>
      {loading ? (
        <div>
          <div className="flex justify-between">
            <div className="text-xl">Capsule Id</div>
            <div className="text-xl">:</div>
            <div className="text-xl">{capsuleDetail.capsule_id}</div>
          </div>

          <div className="flex justify-between mt-3">
            <div className="text-xl">Capsule Serial</div>
            <div className="text-xl">:</div>
            <div className="text-xl">{capsuleDetail.capsule_serial}</div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="text-xl">Landings</div>
            <div className="text-xl">:</div>
            <div className="text-xl">{capsuleDetail.landings}</div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="text-xl">Original Launch</div>
            <div className="text-xl">:</div>
            <div className="text-xl">{moment(capsuleDetail.original_launch).format("DD-MM-YYYY")}</div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="text-xl">Original Launch Unix</div>
            <div className="text-xl">:</div>
            <div className="text-xl">{capsuleDetail.original_launch_unix}</div>
          </div>

          <div className="flex justify-between mt-3">
            <div className="text-xl">Reuse Count</div>
            <div className="text-xl">:</div>
            <div className="text-xl">{capsuleDetail.reuse_count}</div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="text-xl">Status</div>
            <div className="text-xl">:</div>
            <div className="text-xl">{capsuleDetail.status}</div>
          </div>
          <div className="flex justify-between mt-3">
            <div className="text-xl">Type</div>
            <div className="text-xl">:</div>
            <div className="text-xl">{capsuleDetail.type}</div>
          </div>
          <div className="table-responsive mt-3">
            <div className="text-xl mb-1"> Missions</div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Flight</th>
                </tr>
              </thead>
              <tbody>
                {capsuleDetail.missions.map((mission: any) => {
                  return (
                    <tr>
                      <td>{mission?.name}</td>
                      <td>{mission?.flight}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="flex justify-between mt-3">
            <div className="text-xl">Details</div>
            <div className="text-xl">:</div>
            <div className="text-xl">{capsuleDetail.details}</div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center mt-3">
          <Spinner animation="border" className="p-10 text-success" role="status"></Spinner>
        </div>
      )}
    </>
  );
};

export default CapsuleDetails;
