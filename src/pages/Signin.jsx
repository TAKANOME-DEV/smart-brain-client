import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Header, Footer, EmailIcon, PasswordIcon } from "../components";
import { login } from "../assets";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Image = styled.img`
  margin-top: 200px;
  width: 450px;
  height: auto;
`;
const LoginContainer = styled.div`
  margin-top: 200px;
`;
const Title = styled.h1`
  text-align: center;
`;
const Form = styled.form`
  margin-top: 30px;
`;
const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  width: 300px;
  height: 40px;
  border-radius: 30px;
  background-color: #fff;
  padding: 0 15px;
  margin: 20px 0;
`;
const Input = styled.input`
  border: none;
  outline: none;
  font-size: 20px;
`;
const Button = styled.button`
  width: 100%;
  padding: 10px 0;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  font-size: 25px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-3px);
  }
`;
const Text = styled.p`
  margin-top: 20px;
  font-size: 20px;
`;
const Span = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  text-decoration: underline;
`;

const Signin = ({ theme, toggleTheme }) => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  goToTop();

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Container>
        <div>
          <Image src={login} alt="Signin" />
        </div>
        <LoginContainer>
          <Title>Sign in</Title>
          <Form>
            <FormContainer>
              <EmailIcon />
              <Input type="email" placeholder="Email" />
            </FormContainer>
            <FormContainer>
              <PasswordIcon />
              <Input type="password" placeholder="Password" />
            </FormContainer>
            <Button type="submit">Login</Button>
            <Text>
              Don't have a account?{" "}
              <Link to="/register">
                <Span>Sign up</Span>
              </Link>
              .
            </Text>
          </Form>
        </LoginContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default Signin;
