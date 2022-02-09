import React from "react";
import { useParams } from "react-router-dom";

const CryptoDetails = () => {
  const { coinid } = useParams();
  return <div>{coinid}</div>;
};

export default CryptoDetails;
