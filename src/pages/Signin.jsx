import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Header, Footer, EmailIcon, PasswordIcon } from "../components";
import { login } from "../assets";
import { Context } from "../context/GlobalState";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
const Image = styled.img`
  width: 450px;
  height: auto;
  margin-bottom: 50px;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  text-align: center;
  letter-spacing: 3px;
  font-size: 45px;
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
const Error = styled.div`
  color: red;
  font-size: 20px;
  margin-top: 10px;
  text-align: center;
`;

const Signin = ({ theme, toggleTheme }) => {
  // const goToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  // goToTop();
  const { loadUser, error, showError } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputMail = (e) => setEmail(e.target.value);
  const handleInputPassword = (e) => setPassword(e.target.value);

  let history = useHistory();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://smart-server-brain.herokuapp.com/login",
        {
          email: email,
          password: password,
        }
      );
      if (res.data.id) {
        loadUser(res.data);
        showError(null);
        history.push("/dashboard");
      }
    } catch (err) {
      if (err.response) {
        showError(err.response.data);
      }
    }
  };

  return (
    <div>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Container>
        <div>
          <Image src={login} alt="Signin" />
        </div>
        <div>
          <Title>Sign in</Title>
          <Form onSubmit={handleSubmitForm}>
            <FormContainer>
              <EmailIcon />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleInputMail}
              />
            </FormContainer>
            <FormContainer>
              <PasswordIcon />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handleInputPassword}
              />
            </FormContainer>
            <Button type="submit">Login</Button>
            {error && <Error>{error}</Error>}
            <Text>
              Don't have a account?{" "}
              <Link to="/signup">
                <Span>Sign up</Span>
              </Link>
              .
            </Text>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default Signin;
