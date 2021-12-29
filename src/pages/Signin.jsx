import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//* Components
import { ErrorMessage, Input } from "../components";
//* Image
import { login } from "../assets";
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

const Signin = () => {
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
        setTimeout(() => {
          showError(null);
        }, 2000);
      }
    }
  };

  return (
    <Container>
      <div>
        <Image src={login} alt="Signin" />
      </div>
      <UserInfo>
        <Title>Signin</Title>
        <Form onSubmit={handleSubmitForm}>
          <Input
            label="Email"
            name="email"
            value={email}
            handleChange={handleInputMail}
          />
          <Input
            label="Password"
            name="password"
            value={password}
            handleChange={handleInputPassword}
          />
          <Button type="submit">Login</Button>
          {error && <ErrorMessage error={error} />}
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
