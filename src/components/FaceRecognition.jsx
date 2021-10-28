import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;
const Face = styled.img`
  margin-top: 20px;
  width: 500px;
  height: auto;
`;
const Box = styled.div`
  position: absolute;
  box-shadow: 0 0 0 3px #149df2 inset;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Error = styled.div`
  color: red;
  font-size: 20px;
  margin-top: 20px;
  width: 500px;
`;

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
