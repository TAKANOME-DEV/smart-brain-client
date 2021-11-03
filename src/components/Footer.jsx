import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 190px;
  margin-bottom: 60px;
  margin-left: 20px;
  margin-right: 20px;
  @media screen and (max-width: 1150px) {
    margin-top: 150px;
  }
`;
const Text = styled.p`
  font-size: 25px
}`;

const Footer = () => {
  return (
    <Container>
      <Text><strong>takanome_dev</strong> &copy;</Text>
    </Container>
  );
};

export default Footer;
