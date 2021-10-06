import React from "react";
import styled from "styled-components";

const Text = styled.p`
  margin-bottom: 20px;
  font-size: 25px;
`;

const Rank = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Text>Takanome, your current enrtie count is ...</Text>
      <Text>0</Text>
    </div>
  );
};

export default Rank;
