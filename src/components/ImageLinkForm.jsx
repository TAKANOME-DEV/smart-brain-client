import React from "react";
import { Container } from "./styles/ImageLink.styled";

const ImageLinkForm = ({ handleInputChange, handleSubmit }) => {
  return (
    <Container>
      <input
        type="url"
        placeholder="Enter a image link..."
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Detect</button>
    </Container>
  );
};

export default ImageLinkForm;
