import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Context } from "../context/GlobalState";
import { smLogo } from "../assets";
import { User } from ".";
import { Wrapper } from "./styles/Header.styled";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleClick = (e) => setIsOpen(true);
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
      <nav className="container">
        <Link to="/">
          <img src={smLogo} alt="Smart Brain Logo" />
        </Link>
        <div>
          <User
            isOpen={isOpen}
            handleClick={handleClick}
            handleClose={handleClose}
            isSignedIn={isSignedIn}
            handleSignout={handleSignout}
          />
          {isSignedIn ? (
            <button className="secondary" onClick={handleSignout}>
              Signout
            </button>
          ) : (
            <>
              <Link to="/login">
                <button className="secondary">Login</button>
              </Link>
              <Link to="/signup">
                <button className="primary">Signup</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </Wrapper>
  );
};

export default Header;
