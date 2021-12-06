import React from "react";
import { Container, Error, Face, Box } from "./styles/FaceRecognition.styled";

const FaceRecognition = ({ imageUrl, box, error }) => {
  return (
    <Container>
      {error ? (
        <Error>{error}</Error>
      ) : (
        <>
          <Face id="box" src={imageUrl} alt="" />
          <Box
            style={{
              top: box.topRow,
              left: box.leftCol,
              bottom: box.bottomRow,
              right: box.rightCol,
            }}
          ></Box>
        </>
      )}
    </Container>
  );
};

export default FaceRecognition;
