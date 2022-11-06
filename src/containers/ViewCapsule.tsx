import React, { useEffect, useState } from "react";
import users from "../api";
import CapsuleDetails from "../components/CapsuleDetails";

const ViewCapsule = ({ id }: any) => {
  const [capsuleDetail, setCapsuleDetail] = useState();
  const [loading, setLoading] = useState<true | false>(false);
  const capsuleDetails = async () => {
    setLoading(false);
    const res = await users.getCapsuleById(id);
    setLoading(true);
    setCapsuleDetail(res);
  };
  useEffect(() => {
    capsuleDetails();
  }, [id, loading]);

  return <>{capsuleDetail && <CapsuleDetails capsuleDetail={capsuleDetail} loading={loading} />}</>;
};

export default ViewCapsule;
