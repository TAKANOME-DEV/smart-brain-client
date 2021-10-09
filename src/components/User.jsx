import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { Modal } from ".";

const Container = styled.div`
  margin-left: 50px;
`;
const Icon = styled.svg`
  transition: all 0.5s linear;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  position: absolute;
  display: none;
  width: 30%;
  &:hover {
    transform: translateY(-3px);
  }
  @media screen and (max-width: 700px) {
    display: initial;
    top: 0;
    right: 5%;
  }
`;
const Close = styled.button`
  font-size: 25px;
  font-weight: bold;
  position: absolute;
  top: 5%;
  right: 5%;
  padding: 2px 10px;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.body};
  background-color: ${({ theme }) => theme.text};
  border-radius: 20px;
  border: none;
  cursor: pointer;
  transition: all 0.5s linear;
  &:hover {
    transform: translateY(-3px);
  }
`;
const Button = styled.button`
  font-size: 30px;
  padding: 15px 50px;
  margin: 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 20px;
  transition: 0.5s ease;
  box-shadow: rgb(0 0 0 / 40%) 0px 10px 5px 0px;
  &:hover {
    transform: translateY(-5px);
  }
`;
const PrimaryButton = styled.button`
  font-size: 30px;
  padding: 15px 50px;
  margin-top: 20px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 20px;
  transition: 0.5s ease;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 5px 0px;
  &:hover {
    transform: translateY(-5px);
  }
`;

const User = ({ handleClick, handleClose, isOpen, isSignedIn }) => {
  return (
    <Container>
      <Icon
        onClick={handleClick}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="user"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
      >
        <path
          fill="currentColor"
          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
        ></path>
      </Icon>
      <Modal open={isOpen}>
        <Close onClick={handleClose}>x</Close>
        {isSignedIn ? (
          <Link to="/login">
            <PrimaryButton>Signout</PrimaryButton>
          </Link>
        ) : (
          <>
            <Link to="/login">
              <Button>Login</Button>
            </Link>
            <Link to="/register">
              <Button>Signup</Button>
            </Link>
          </>
        )}
      </Modal>
    </Container>
  );
};

export default User;
