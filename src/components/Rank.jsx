import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/GlobalState";

const Container = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  p {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  span {
    margin-bottom: 1rem;
    font-size: 1.8rem;
    color: var(--blue-color);
  }
`;

const Rank = () => {
  const { user } = useContext(Context);

  return (
    <Container>
      <p>{`${user.username}, your current entry count is ...`}</p>
      <span>{`${user.entries}`}</span>
    </Container>
  );
};

export default Rank;
