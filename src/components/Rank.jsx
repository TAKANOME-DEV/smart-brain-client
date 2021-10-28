import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/GlobalState";

const Text = styled.p`
  margin-bottom: 20px;
  font-size: 25px;
`;

const Rank = () => {
  const { user } = useContext(Context);

  return (
    <div style={{ textAlign: "center" }}>
      <Text>{`${user.username}, your current entry count is ...`}</Text>
      <Text>{`${user.entries}`}</Text>
    </div>
  );
};

export default Rank;
