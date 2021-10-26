import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 700px;
  height: 80px;
  background-color: #c6c6c6;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 490px) {
    width: 100%;
    height: 100px;
    flex-wrap: wrap;
  }

  @media (min-width: 492px) and (max-width: 700px) {
    width: 100%;
    height: 80px;
    flex-wrap: wrap;
  }
`;
const Input = styled.input`
  width: 70%;
  height: 50%;
  font-size: 20px;
  border-radius: 15px;
  padding: 0 20px;
  border: none;
  outline: none;
  @media (max-width: 490px) {
    width: 85%;
    height: 40%;
    ${"" /* margin: 10px 0; */}
  }
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

const ImageLinkForm = ({ handleInputChange, handleSubmit }) => {
  return (
    <Container>
      <Input
        type="url"
        placeholder="Enter a image link..."
        // value={input}
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>Detect</Button>
    </Container>
  );
};

export default ImageLinkForm;
