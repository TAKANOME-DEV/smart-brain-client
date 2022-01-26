import React from "react";
import { ModalContainer } from "./styles/Modal.styled";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <ModalContainer>
      <div className="overlay" onClick={onClose} />
      <div className="modal" onClick={onClose}>
        {children}
      </div>
    </ModalContainer>
  );
};

export default Modal;
