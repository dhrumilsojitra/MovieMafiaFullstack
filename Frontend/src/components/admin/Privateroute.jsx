// import React from "react";

import { Navigate } from "react-router-dom";

const Privateroute = ({ children }) => {
  const token = localStorage.getItem("token");
  return <>{token ? children : <Navigate to="/admin"></Navigate>}</>;
};

export default Privateroute;
