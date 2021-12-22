import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/GlobalState";

const RequireAuth = () => {
  const { user } = useContext(Context);
  if (user.id === "") return <Navigate to="/login" replace />;
};

export default RequireAuth;
