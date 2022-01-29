import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../services/auth";
import { Input } from "../components";
import { Container } from "../components/styles/SigninSignup.styled";
import { Context } from "../context/GlobalState";
import { signup } from "../assets";

const Signup = () => {
	const { loadUser } = useContext(Context);

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
			const user = await registerUser(username, email, password);
			loadUser(user);
			navigate("/dashboard", { replace: true });
		} catch (err) {
			if (err.response?.status === 400) return toast.error(err.response.data);
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
