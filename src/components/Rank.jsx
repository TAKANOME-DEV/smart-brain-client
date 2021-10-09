import React from "react";
import styled from "styled-components";

const Text = styled.p`
  margin-bottom: 20px;
  font-size: 25px;
`;

const Rank = ({ username, entries }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Text>{`${username}, your current entry count is ...`}</Text>
      <Text>{`${entries}`}</Text>
    </div>
  );
};

export default Rank;
