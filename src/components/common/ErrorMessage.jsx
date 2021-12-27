import React from "react";
import { Error } from "../styles/ErrorMessage.styled";

const ErrorMessage = ({ error }) => {
  return <Error>❌ {error}</Error>;
};

export default ErrorMessage;
