import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//* Context
import { Context } from "../context/GlobalState";
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

  const { loadUser } = useContext(Context);
  let navigate = useNavigate();

  const handleSignout = () => {
    loadUser({
      id: "",
      username: "",
      email: "",
      entries: 0,
      joined: "",
    });
    navigate("/");
  };

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
            handleSignout={handleSignout}
          />
          {isSignedIn ? (
            <Secondary onClick={handleSignout}>Signout</Secondary>
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
