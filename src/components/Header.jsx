import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
//* Image
import { smLogo } from "../assets";
//* SVG
import { User } from ".";
//* Styles
import {
  Wrapper,
  Nav,
  Primary,
  Secondary,
  Logo,
  Buttons,
} from "./styles/Header.styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [location]);

  return (
    <Wrapper>
      <Nav>
        <Link to="/">
          <Logo src={smLogo} alt="Smart Brain Logo" />
        </Link>
        <Buttons>
          <User
            isOpen={isOpen}
            handleClick={handleClick}
            handleClose={handleClose}
            isSignedIn={isSignedIn}
          />
          {isSignedIn ? (
            <Link to="/login">
              <Secondary>Signout</Secondary>
            </Link>
          ) : (
            <>
              <Link to="/login">
                <Secondary>Login</Secondary>
              </Link>
              <Link to="/signup">
                <Primary>Signup</Primary>
              </Link>
            </>
          )}
        </Buttons>
      </Nav>
    </Wrapper>
  );
};

export default Header;
