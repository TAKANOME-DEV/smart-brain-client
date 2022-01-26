import React from "react";
import { Link } from "react-router-dom";
import { Modal } from ".";
import { user } from "../assets";
import { Container } from "./styles/User.styled";

const User = ({
  handleClick,
  handleClose,
  handleSignout,
  isOpen,
  isSignedIn,
}) => {
  return (
    <Container>
      <div onClick={handleClick}>
        <img src={user} alt="" />
      </div>
      <Modal open={isOpen} onClose={handleClose}>
        {isSignedIn ? (
          <button className="md-secondary" onClick={handleSignout}>
            Signout
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="md-secondary">Login</button>
            </Link>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default User;
