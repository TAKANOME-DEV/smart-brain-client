import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../assets";
import { Context } from "../context/GlobalState";
import {
  Container,
  Image,
  UserInfo,
  Title,
  Form,
  Label,
  Input,
  Button,
  Text,
  Span,
  Error,
} from "../components/styles/SigninSignup.styled";

const Signin = () => {
  // const goToTop = () => {
  //   window.scrollTo(0, 0);
  // };
  // goToTop();

  const { loadUser, error, showError } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputMail = (e) => setEmail(e.target.value);
  const handleInputPassword = (e) => setPassword(e.target.value);

  let navigate = useNavigate();

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
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response) {
        showError(err.response.data);
      }
    }
  };

  return (
    <Container>
      <div>
        <Image src={login} alt="Signin" />
      </div>
      <UserInfo>
        <Title>Sign in</Title>
        <Form onSubmit={handleSubmitForm}>
          <Label htmlFor="email">Email :</Label>
          <Input
            required
            type="email"
            value={email}
            onChange={handleInputMail}
          />
          <Label htmlFor="password">Password :</Label>
          <Input
            required
            type="password"
            value={password}
            onChange={handleInputPassword}
          />
          <Button type="submit">Login</Button>
          {error && <Error>{error}</Error>}
          <Text>
            Don't have a account?{" "}
            <Link to="/signup">
              <Span>Sign up</Span>
            </Link>
          </Text>
        </Form>
      </UserInfo>
    </Container>
  );
};

export default Signin;
