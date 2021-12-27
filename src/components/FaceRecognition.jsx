import React from "react";
//* Styles
import { Container, Face, Box } from "./styles/FaceRecognition.styled";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <Container>
      <Face id="box" src={imageUrl} alt="" />
      <Box
        style={{
          top: box.topRow,
          left: box.leftCol,
          bottom: box.bottomRow,
          right: box.rightCol,
        }}
      ></Box>
    </Container>
  );
};

export default FaceRecognition;
