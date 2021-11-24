import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../assets";
import axios from "axios";
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

const Signup = () => {
  const { error, showError, loadUser } = useContext(Context);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  let navigate = useNavigate();

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://smart-server-brain.herokuapp.com/signup",
        {
          username: username,
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
        <Image src={signup} alt="Signin" />
      </div>
      <UserInfo>
        <Title>Sign up</Title>
        <Form onSubmit={handleSubmitForm}>
          <Label htmlFor="username">Username :</Label>
          <Input
            required
            type="text"
            value={username}
            onChange={handleUsernameChange}
          />
          <Label htmlFor="email">Email :</Label>
          <Input
            required
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
          <Label htmlFor="password">Password :</Label>
          <Input
            required
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Button type="submit">Sign up</Button>
          {error && <Error>{error}</Error>}
          <Text>
            Already have a account?{" "}
            <Link to="/login">
              <Span>Sign in</Span>
            </Link>
          </Text>
        </Form>
      </UserInfo>
    </Container>
  );
};

export default Signup;
