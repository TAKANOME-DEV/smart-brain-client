import React from "react";
import { Link } from "react-router-dom";
import { welcome } from "../assets";
import { Container } from "./styles/Main.styled";

const Main = () => {
  return (
    <Container>
      <div className="container">
        <div className="img">
          <img src={welcome} alt="Welcome SVG" />
        </div>
        <div className="welcome">
          <h1>Welcome to the magic brain.</h1>
          <p>This brain will detect faces in your pictures.</p>
          <Link to="/signup">
            <button>Give it a try</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Main;
