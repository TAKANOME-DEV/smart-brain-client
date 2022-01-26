import React from "react";
import styled from "styled-components";
import { copyright } from "../assets";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--dark-color);
  box-shadow: 0px -10px 20px rgba(0, 0, 0, 0.15);
  padding: 1rem 0;
  /* margin: 0 auto; */

  img {
    width: 15rem;
    height: 3rem;
  }

  /* @media (max-width: 639px) {
    position: fixed;
    bottom: 0;
  } */
`;

const Footer = () => {
  return (
    <Container>
      <img src={copyright} alt="Copyright" />
    </Container>
  );
};

export default Footer;
