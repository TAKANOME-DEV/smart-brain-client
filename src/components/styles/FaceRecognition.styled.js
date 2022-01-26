import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  img {
    margin-top: 1.5rem;
    max-width: 31rem;
    width: 100%;
    height: auto;
  }

  .box {
    position: absolute;
    box-shadow: 0 0 0 3px var(--blue-color) inset;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
`;
