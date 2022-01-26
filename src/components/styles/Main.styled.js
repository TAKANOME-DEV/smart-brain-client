import styled from "styled-components";

export const Container = styled.main`
  .container {
    display: grid;
    gap: 3rem;
    grid-template-columns: 20rem 1fr;
    margin: 2rem auto;

    .img {
      img {
        width: 100%;
      }
    }

    .welcome {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      padding: 0 2rem;

      h1 {
        font-size: 3rem;
        margin-bottom: 0.8rem;
      }

      p {
        font-size: 1.5rem;
        margin-bottom: 1.5rem;
      }

      button {
        font-weight: bold;
        font-size: 2rem;
      }
    }
  }

  @media (min-width: 640px) and (max-width: 768px) {
    .container {
      grid-template-columns: 15rem 1fr;
      gap: 2rem;
    }
  }
  @media (max-width: 639px) {
    .container {
      display: flex;
      justify-content: center;
      margin: 8rem 0;

      .welcome {
        padding: 0;
      }
    }

    .img {
      display: none;
    }
  }
`;
