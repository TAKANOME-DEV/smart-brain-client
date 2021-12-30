import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//* Components
import { ErrorMessage, Input } from "../components";
//* Config
import { PROD_ENDPOINT } from "../config";
//* Image
import { signup } from "../assets";
//* Context
import { Context } from "../context/GlobalState";
//* Styles
import {
  Container,
  Image,
  UserInfo,
  Title,
  Form,
  Button,
  Text,
  Span,
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
      const res = await axios.post(`${PROD_ENDPOINT}/signup`, {
        username: username,
        email: email,
        password: password,
      });
      if (res.data.id) {
        loadUser(res.data);
        showError(null);
        navigate("/dashboard");
      }
    } catch (err) {
      const expectedError =
        err.response?.status >= 400 && err.response?.status < 500;
      expectedError
        ? showError(err.response.data)
        : showError("Oops! An unexpected error occurred");
    }
  };

  return (
    <Container>
      <div>
        <Image src={signup} alt="Signin" />
      </div>
      <UserInfo>
        <Title>Signup</Title>
        <Form onSubmit={handleSubmitForm}>
          <Input
            label="Username"
            name="username"
            value={username}
            handleChange={handleUsernameChange}
          />
          <Input
            label="Email"
            name="email"
            value={email}
            handleChange={handleEmailChange}
          />
          <Input
            label="Password"
            name="password"
            value={password}
            handleChange={handlePasswordChange}
          />
          <Button type="submit">Sign up</Button>
          {error && <ErrorMessage error={error} />}
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
