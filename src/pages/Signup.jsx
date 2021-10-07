import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import {
  Header,
  Footer,
  UserIcon,
  EmailIcon,
  PasswordIcon,
} from "../components";
import { signup } from "../assets";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Image = styled.img`
  margin-top: 150px;
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

const Signup = ({ theme, toggleTheme }) => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  goToTop();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  let history = useHistory();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      })
        .then((res) => res.json())
        .then((user) => {
          console.log(user);
          history.push("/dashboard");
        });
    } catch (err) {
      console.log("error", err);
    }
  };

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Container>
        <div>
          <Image src={signup} alt="Signin" />
        </div>
        <LoginContainer>
          <Title>Sign up</Title>
          <Form onSubmit={handleSubmitForm}>
            <FormContainer>
              <UserIcon />
              <Input
                type="text"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </FormContainer>
            <FormContainer>
              <EmailIcon />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </FormContainer>
            <FormContainer>
              <PasswordIcon />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </FormContainer>
            <Button type="submit">Sign up</Button>
            <Text>
              Already have a account?{" "}
              <Link to="/login">
                <Span>Sign in</Span>
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

export default Signup;
