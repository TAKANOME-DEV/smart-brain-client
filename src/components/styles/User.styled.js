import styled from "styled-components";

export const Container = styled.div`
  margin-left: 1rem;

  div {
    img {
      width: 2rem;
      height: 2rem;
      cursor: pointer;
      display: none;
      @media screen and (max-width: 600px) {
        display: initial;
      }
    }
  }

  .md-secondary {
    margin-bottom: 1rem;
    color: var(--white-color);
    background-color: var(--dark-color);
    border: 1px solid var(--white-color);
    &:hover {
      background-color: var(--lightWhite-color);
    }
  }
`;
