import styled from "styled-components";

export const Container = styled.div`
  .container {
    display: grid;
    grid-template-columns: 25rem 1fr;
    gap: 3rem;
    margin: 2rem auto;
    align-items: center;

    .img {
      img {
        width: 100%;
      }
    }

    .form-container {
      background: var(--darker-color);
      border-radius: 1rem;
      margin: 0 auto;
      padding: 2rem 1rem;

      div {
        padding: 0 1rem;

        h1 {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 2rem;
        }

        form {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;

          button {
            max-width: 18rem;
            width: 100%;
            margin-top: 1rem;
            font-weight: bold;
          }

          p {
            font-size: 1.3rem;
            margin-top: 1rem;

            span {
              font-size: 1.3rem;
              color: var(--blue-color);
              text-decoration: underline;
              margin-left: 10px;
            }
          }
        }
      }
    }
  }

  @media (min-width: 770px) and (max-width: 890px) {
    .container {
      grid-template-columns: 20rem 1fr;
      gap: 2rem;
    }
  }

  @media (min-width: 430px) and (max-width: 769px) {
    .container {
      grid-template-columns: 1fr;
      .img {
        display: none;
      }
    }
  }

  @media (max-width: 429px) {
    .container {
      display: block;

      .img {
        display: none;
      }

      .form-container {
        padding: 2rem 0;
      }
    }
  }
`;
