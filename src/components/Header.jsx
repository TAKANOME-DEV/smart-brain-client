import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { smLogo } from "../assets";
import { User } from ".";
import { Nav, Primary, Secondary, Logo } from "./styles/Header.styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const [isSignedIn, setIsSignedIn] = useState(false);

  let location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [location]);

  return (
    <div>
      <Nav>
        <Link to="/">
          <Logo src={smLogo} alt="Smart Brain Logo" />
        </Link>
        <div>
          <User
            isOpen={isOpen}
            handleClick={handleClick}
            handleClose={handleClose}
            isSignedIn={isSignedIn}
          />
          {isSignedIn ? (
            <Link to="/">
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
        </div>
      </Nav>
    </div>
  );
};

export default Header;
