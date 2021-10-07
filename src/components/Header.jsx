import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { User, ToggleTheme, Logo } from ".";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.body};
  padding: 20px 0;
  box-shadow: ${({ theme }) => theme.boxShadow};
  transition: all 0.5s linear;
`;
const Container = styled.div`
  margin-right: 20px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const PrimaryButton = styled.button`
  font-size: 30px;
  padding: 15px 50px;
  margin: 0 10px;
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
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const SecondaryButton = styled.button`
  font-size: 30px;
  padding: 15px 50px;
  margin: 0 10px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 20px;
  transition: 0.5s ease;
  box-shadow: rgb(0 0 0 / 10%) 0px 5px 5px 0px;
  &:hover {
    transform: translateY(-5px);
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const Title = styled.p`
  font-size: 55px;
  font-weight: bold;
  position: absolute;
  color: ${({ theme }) => theme.text};
  left: 40%;
  @media screen and (max-width: 1060px) {
    opacity: 0;
  }
  @media screen and (min-width: 1061px) and (max-width: 1380px) {
    left: 20%;
  }
`;

const Header = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <Link to="/">
        <Title>Smart Brain</Title>
      </Link>
      <Container>
        <ToggleTheme theme={theme} toggleTheme={toggleTheme} />
        <User
          isOpen={isOpen}
          handleClick={handleClick}
          handleClose={handleClose}
        />
        <Link to="login">
          <SecondaryButton>Login</SecondaryButton>
        </Link>
        <Link to="register">
          <PrimaryButton>Signup</PrimaryButton>
        </Link>
      </Container>
    </Nav>
  );
};

export default Header;
