import React from "react";
import styled from "styled-components";
import { copyright } from "../assets";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #2f303a;
  box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.15);
  padding: 15px 0;
  margin-top: 80px;
`;
const Image = styled.img`
  width: 313px;
  height: 44px;
}`;

const Footer = () => {
  return (
    <Container>
      <Image src={copyright} alt="Copyright" />
    </Container>
  );
};

export default Footer;
