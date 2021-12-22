import React from "react";
import { Link } from "react-router-dom";
//* Image
import { welcome } from "../assets";
//* Styles
import {
  Container,
  Image,
  Para,
  Title,
  Text,
  Button,
} from "./styles/Main.styled";

const Main = () => {
  return (
    <Container>
      <div>
        <Image src={welcome} alt="Welcome SVG" />
      </div>
      <Para>
        <Title>Welcome to the magic brain.</Title>
        <Text>This brain will detect faces in your pictures.</Text>
        <Link to="/signup">
          <Button>Give it a try</Button>
        </Link>
      </Para>
    </Container>
  );
};

export default Main;
