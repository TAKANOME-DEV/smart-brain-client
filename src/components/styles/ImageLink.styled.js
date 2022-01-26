import styled from "styled-components";

export const Container = styled.div`
  max-width: 40rem;
  width: 100%;
  height: 5.6rem;
  background-color: var(--darker-color);
  border-radius: 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 70%;
    max-height: 3rem;
    height: 100%;
    font-size: 1.2rem;
    border-radius: 0.6rem;
    padding: 0 1rem;
    border: none;
    outline: none;
  }

  button {
    font-weight: bold;
    padding: 0.7rem 2rem;
    margin-left: 0.6rem;
    border-radius: 0.6rem;
    transition: transform 0.5s;
    &:active {
      transform: scale(0.9);
    }
  }

  @media (max-width: 560px) {
    height: 10rem;
    display: flex;
    flex-direction: column;

    input {
      width: 90%;
      margin: 1rem 0;
    }

    button {
      width: 90%;
    }
  }
`;
