import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/GlobalState";

const RequireAuth = ({ children }) => {
  const { user } = useContext(Context);
  if (user.id === "") return <Navigate to="/login" replace />;
  return <>{children}</>;
};

export default RequireAuth;
