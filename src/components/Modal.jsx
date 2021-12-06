import React from "react";
import ReactDOM from "react-dom";
import { ModalContainer, Overlay, Container } from "./styles/Modal.styled";

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
