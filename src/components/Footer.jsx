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
      <Text>
        Copyright © 2021 <strong>takanome_dev</strong> - All Rights Reserved
      </Text>
    </Container>
  );
};

export default Footer;
