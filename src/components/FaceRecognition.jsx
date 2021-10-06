import React from "react";
import styled from "styled-components";
import { face } from "../assets";

const Face = styled.img`
  margin-top: 20px;
  width: 400px;
  height: auto;
`;

const FaceRecognition = () => {
  return (
    <div>
      <Face src={face} alt="Face" />
    </div>
  );
};

export default FaceRecognition;
