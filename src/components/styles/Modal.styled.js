import styled from "styled-components";

export const ModalContainer = styled.div`
  position: relative;
  @media screen and (min-width: 600px) {
    display: none;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .modal {
    position: absolute;
    background-color: var(--dark-color);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    right: 0;
    margin-top: 10px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px 5px;
  }
`;
