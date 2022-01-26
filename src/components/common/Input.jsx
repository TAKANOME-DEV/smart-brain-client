import React from "react";
import { Container } from "../styles/Input.styled";

const Input = ({ label, name, value, handleChange }) => {
  return (
    <Container>
      <h2 htmlFor={name}>{label}</h2>
      <input
        required
        id={name}
        name={name}
        type={name}
        value={value}
        onChange={handleChange}
      />
    </Container>
  );
};

export default Input;
