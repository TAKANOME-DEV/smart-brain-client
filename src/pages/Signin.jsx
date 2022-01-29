import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Input } from "../components";
import { Container } from "../components/styles/SigninSignup.styled";
import { Context } from "../context/GlobalState";
import { logUser } from "../services/auth";
import { login } from "../assets";

const Signin = () => {
	const { loadUser } = useContext(Context);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleInputMail = (e) => setEmail(e.target.value);
	const handleInputPassword = (e) => setPassword(e.target.value);

	let navigate = useNavigate();

	const handleSubmitForm = async (e) => {
		e.preventDefault();

		try {
			const user = await logUser(email, password);
			loadUser(user);
			navigate("/dashboard", { replace: true });
		} catch (err) {
			if (err.response?.status === 400) {
				toast.error(err.response.data);
			}
		}
	};

	return (
		<Container>
			<div className="container">
				<div className="img">
					<img src={login} alt="Signin" />
				</div>
				<div className="form-container">
					<div>
						<h1>Signin</h1>
						<form onSubmit={handleSubmitForm}>
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
							<button type="submit">Login</button>
							<p>
								Don't have a account?{" "}
								<Link to="/signup">
									<span>Sign up</span>
								</Link>
							</p>
						</form>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default Signin;
