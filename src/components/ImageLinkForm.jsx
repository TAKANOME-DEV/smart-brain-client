import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 700px;
  height: 80px;
  ${"" /* background-color: #232734; */}
  background-color:    #c6c6c6;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 70%;
  height: 50%;
  font-size: 20px;
  border-radius: 15px;
  padding: 0 20px;
  border: none;
  outline: none;
`;
const Button = styled.button`
  font-size: 25px;
  font-weight: bold;
  padding: 5px 30px;
  margin-left: 10px;
  border-radius: 15px;
  border: none;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: scale(0.9);
  }
`;

const ImageLinkForm = () => {
  return (
    <Container>
      <Input type="email" placeholder="Enter a image link..." />
      <Button type="submit">Detect</Button>
    </Container>
  );
};

export default ImageLinkForm;
