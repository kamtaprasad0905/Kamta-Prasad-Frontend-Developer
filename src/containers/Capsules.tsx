import React, { useEffect, useState } from "react";
import users from "../api";
import CapsulesList from "../components/CapsulesList";
import { Form, Pagination } from "react-bootstrap";
import Header from "../components/shared/Header";
const Capsules = () => {
  const [capsules, setCapsules] = useState<any>(null);
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState("");
  const [type, setType] = useState("");
  const [loading, setLoading] = useState(true);
  const limit = 9;
  const [page, setPage] = useState(0);
  const getAllCapsules = async () => {
    setLoading(false);
    const res = await users.getCapsules(page || 0, status, type, limit || 9);
    setLoading(true);
    setCapsules(res);
  };
  useEffect(() => {
    getAllCapsules();
  }, [status, type, page, loading]);
  console.log(capsules);
  return (
    <>
      <Header />
      <div className="mt-4">
        <div className="row mx-4">
          <div className="col-lg-2 flex">
            <div className="text-xl mt-1 me-2 whitespace-nowrap">Sort By Status: </div>
            <Form.Group className="mb-3">
              <Form.Select
                onChange={(e) => {
                  setStatus(e.target.value);
                  getAllCapsules();
                }}
              >
                <option value="active">Active</option>
                <option value="retired">Retired</option>
                <option value="unknown">Unknown</option>
                <option value="destroyed">Destroyed</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="col-lg-2 me-5 flex">
            <div className="text-xl mt-1 me-2 whitespace-nowrap">Sort By Type: </div>
            <Form.Group className="mb-3">
              <Form.Select
                onChange={(e) => {
                  setType(e.target.value);
                  getAllCapsules();
                }}
              >
                <option value="Dragon 1.0">Dragon 1.0</option>
                <option value="Dragon 1.1">Dragon 1.1</option>
                <option value="Dragon 2.0">Dragon 2.0</option>
              </Form.Select>
            </Form.Group>
          </div>
        </div>
        {capsules && <CapsulesList capsules={capsules} loading={loading} />}
        <Pagination className="justify-content-center mt-3">
          <Pagination.First onClick={() => setPage(0)} disabled={page === 0} />
          <Pagination.Prev onClick={() => setPage(page - 9)} disabled={page < 2} />
          <Pagination.Next onClick={() => setPage(page + 9)} disabled={page >= (capsules?.length || 0)} />
          <Pagination.Last onClick={() => setPage(9)} disabled={page >= (capsules?.length || 0)} />
        </Pagination>
      </div>
    </>
  );
};

export default Capsules;
