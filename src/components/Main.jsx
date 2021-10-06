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
  margin-top: 200px;
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
  padding-top: 200px;
  @media screen and (max-width: 800px) {
    margin-left: 0px;
  }
  @media screen and (min-width: 801px) and (max-width: 1150px) {
    margin-left: 80px;
  }
`;
const Title = styled.p`
  font-size: 110px;
  font-weight: bold;
  line-height: 150px;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 559px) {
    font-size: 70px;
    line-height: 80px;
    margin-top: -100px;
  }
  @media screen and (min-width: 560px) and (max-width: 800px) {
    font-size: 80px;
    line-height: 100px;
    margin-top: -100px;
  }
  @media screen and (min-width: 801px) and (max-width: 1150px) {
    font-size: 80px;
    line-height: 100px;
    margin-top: 0px;
    ${"" /* margin-left: 80px; */}
  }
`;
const Text = styled.p`
  font-size: 50px;
  font-weight: bold;
  line-height: 80px;
  color: ${({ theme }) => theme.text};
  @media screen and (max-width: 559px) {
    font-size: 50px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: -100px;
  }
  @media screen and (min-width: 560px) and (max-width: 800px) {
    margin-left: 140px;
    margin-right: 140px;
    margin-top: -100px;
  }
  @media screen and (min-width: 801px) and (max-width: 1150px) {
    margin: 0 15px;
  }
  @media screen and (min-width: 1151px) {
    margin: 0 50px;
    font-size: 60px;
  }
`;
const Button = styled.button`
  font-size: 50px;
  margin-top: 50px;
  position: absolute;
  right: 22%;
  padding: 10px 40px;
  border: none;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  cursor: pointer;
  transition: transform 0.5s ease;
  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (min-width: 1000px) and (max-width: 1499px) {
    margin-top: 15px;
    right: 10%;
  }

  @media screen and (min-width: 1500px) {
    margin-top: 10px;
    right: 15%;
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
