import React from "react";
import { Container } from "./styles/FaceRecognition.styled";

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <Container>
      <img id="box" src={imageUrl} alt="" />
      <div
        className="box"
        style={{
          top: box.topRow,
          left: box.leftCol,
          bottom: box.bottomRow,
          right: box.rightCol,
        }}
      ></div>
    </Container>
  );
};

export default FaceRecognition;
