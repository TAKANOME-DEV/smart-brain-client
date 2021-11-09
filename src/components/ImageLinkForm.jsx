import React from "react";
import { Container, Input, Button } from "./styles/ImageLink.styled";

const ImageLinkForm = ({ handleInputChange, handleSubmit }) => {
  return (
    <Container>
      <Input
        type="url"
        placeholder="Enter a image link..."
        onChange={handleInputChange}
      />
      <Button onClick={handleSubmit}>Detect</Button>
    </Container>
  );
};

export default ImageLinkForm;
