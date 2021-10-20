import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  background-color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 9%;
  right: 2%;
  padding: 30px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
const ModalContainer = styled.div`
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <ModalContainer>
      <Overlay />
      <Container onClick={onClose}>{children}</Container>
    </ModalContainer>,
    document.getElementById("portal")
  );
};

export default Modal;
