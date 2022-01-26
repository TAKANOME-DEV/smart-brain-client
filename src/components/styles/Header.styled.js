import styled from "styled-components";

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  padding: 0.5rem 0;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  background-color: var(--dark-color);

  .container {
    display: grid;
    grid-template-columns: auto 1fr;

    img {
      width: 100%;
    }

    div {
      justify-self: flex-end;
      align-self: center;

      .secondary {
        color: var(--white-color);
        background-color: var(--dark-color);
        border: 1px solid var(--white-color);
        &:hover {
          background-color: var(--lightWhite-color);
        }
        @media (max-width: 600px) {
          display: none;
        }
      }

      .primary {
        margin-left: 1.25rem;
        @media (max-width: 600px) {
          display: none;
        }
      }
    }
  }
`;
