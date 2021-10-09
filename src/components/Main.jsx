import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { welcome, image } from "../assets";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media screen and (min-width: 560px) and (max-width: 830px) {
    flex-wrap: wrap;
  }
  @media screen and (max-width: 559px) {
    flex-wrap: wrap;
  }
`;
const Image = styled.img`
  width: 40%;
  height: auto;
  @media screen and (max-width: 559px) {
    width: 70%;
  }
  @media screen and (min-width: 560px) and (max-width: 800px) {
    width: 70%;
  }
  @media screen and (min-width: 801px) and (max-width: 1150px) {
    width: 50%;
  }
`;
const Container = styled.div`
  margin-left: 200px;
  @media screen and (max-width: 800px) {
    margin-left: 0px;
  }
  @media screen and (min-width: 801px) and (max-width: 1150px) {
    margin-left: 80px;
  }
`;
const Title = styled.p`
  font-size: 80px;
  font-weight: bold;
  line-height: 100px;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 559px) {
    font-size: 70px;
    line-height: 80px;
  }
  @media screen and (min-width: 560px) and (max-width: 800px) {
    font-size: 70px;
    line-height: 90px;
  }
  @media screen and (min-width: 801px) and (max-width: 1150px) {
    font-size: 70px;
    line-height: 90px;
  }
`;
const Text = styled.p`
  font-size: 50px;
  font-weight: bold;
  line-height: 70px;
  color: ${({ theme }) => theme.text};
  margin-right: 50px;

  @media screen and (min-width: 560px) and (max-width: 800px) {
    margin-left: 100px;
    margin-right: 100px;
  }

  @media screen and (min-width: 801px) and (max-width: 1150px) {
    margin: 0 15px;
  }
`;
const Button = styled.button`
  font-size: 50px;
  margin-top: 50px;
  position: absolute;
  padding: 10px 50px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  transition: transform 0.5s ease;
  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 400px) and (max-width: 509px) {
    margin-top: 15px;
    right: 10%;
  }

  @media (min-width: 510px) and (max-width: 809px) {
    margin-top: 15px;
    right: 30%;
  }

  @media (min-width: 810px) and (max-width: 880px) {
    right: 7%;
  }
`;

const Main = () => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  goToTop();

  return (
    <Wrapper>
      <Row>
        <Image src={welcome} />
        <Container>
          <Title>
            Welcome <br />
            To The Magic <br />
            Brain.
          </Title>
        </Container>
      </Row>
      <Row>
        <Image src={image} />
        <Container>
          <Text>
            Add A Picture Link And The Brain Detects The Face. Isn't That
            Interesting ??
          </Text>
          <Link to="/register">
            <Button>Get Started</Button>
          </Link>
        </Container>
      </Row>
    </Wrapper>
  );
};

export default Main;
