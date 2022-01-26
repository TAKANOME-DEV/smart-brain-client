import styled from "styled-components";

export const Card = styled.div`
  margin: 5rem auto;

  .container {
    max-width: 25rem;
    width: 100%;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #202027;
    border-radius: 20px;

    h1 {
    }

    p {
      margin-top: 1.2rem;
      font-size: 1.4rem;
      line-height: 2rem;
    }

    button {
      padding: 0.6rem 1.5rem;
      margin-top: 2rem;
      font-weight: bold;
      font-size: 1.6rem;
    }
  }

  @media (max-width: 399px) {
    .container {
      max-width: 20rem;

      h1 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1.2rem;
      }

      button {
        font-size: 1.4rem;
      }
    }
  }
`;
