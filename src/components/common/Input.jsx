import React from "react";
import { Input as InputStyled, Label } from "../styles/SigninSignup.styled";

const Input = ({ label, name, value, handleChange }) => {
  return (
    <div>
      <Label htmlFor={name}>{label} :</Label>
      <InputStyled
        required
        id={name}
        name={name}
        type={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
