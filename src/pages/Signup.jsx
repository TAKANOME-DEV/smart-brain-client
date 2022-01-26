import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ErrorMessage, Input } from "../components";
import { signup } from "../assets";
import { Context } from "../context/GlobalState";
import { Container } from "../components/styles/SigninSignup.styled";

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
        `${process.env.REACT_APP_PROD_ENDPOINT}/signup`,
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
      const expectedError =
        err.response?.status >= 400 && err.response?.status < 500;
      expectedError
        ? showError(err.response.data)
        : showError("Oops! An unexpected error occurred");

      setTimeout(() => showError(null), 3000);
    }
  };

  return (
    <Container>
      <div className="container">
        <div className="img">
          <img src={signup} alt="Signin" />
        </div>
        <div className="form-container">
          <div>
            <h1>Signup</h1>
            <form onSubmit={handleSubmitForm}>
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
              <button type="submit">Sign up</button>
              {error && <ErrorMessage error={error} />}
              <p>
                Already have a account?{" "}
                <Link to="/login">
                  <span>Sign in</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Signup;
