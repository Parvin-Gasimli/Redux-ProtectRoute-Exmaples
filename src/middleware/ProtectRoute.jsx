import { Navigate } from "react-router-dom";

import React from "react";
import { useSelector } from "react-redux";

const ProtectRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectRoute;
