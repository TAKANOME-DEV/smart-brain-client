import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  background-color: #2f303a;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 9%;
  right: 2%;
  padding: 30px;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 20%) 0px 9px 9px 5px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  @media screen and (min-width: 600px) {
    display: none;
  }
`;
