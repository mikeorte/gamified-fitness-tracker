import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import Login styles
import data from "../data.json"; // Import initial data from JSON file

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSignUp, setIsSignUp] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		const storedUser = JSON.parse(localStorage.getItem("user"));
		if (!storedUser) {
			localStorage.setItem("user", JSON.stringify(data.user));
		}
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignUp) {
			const newUser = { email, password };
			localStorage.setItem("user", JSON.stringify(newUser));
			localStorage.setItem("profile", JSON.stringify({
				...data.profile,
				email: newUser.email,
				username: newUser.email.split('@')[0]
			}));
			alert("Sign up successful. Please log in.");
			setIsSignUp(false);
		} else {
			const storedUser = JSON.parse(localStorage.getItem("user"));
			if (storedUser && storedUser.email === email && storedUser.password === password) {
				navigate("/profile");
			} else {
				alert("Invalid credentials");
			}
		}
	};

	return (
		<div className="login-page">
			<div className="login-container">
				<h2>{isSignUp ? "Sign Up" : "Log In"}</h2>
				<p>
					{isSignUp
						? "Create a new account to get started."
						: "Log in to access your dashboard."}
				</p>
				<form onSubmit={handleSubmit} className="login-form">
					<input
						type="email"
						placeholder="Email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="login-input"
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="login-input"
					/>
					<button type="submit" className="login-button">
						{isSignUp ? "Sign Up" : "Log In"}
					</button>
				</form>
				<button
					onClick={() => setIsSignUp(!isSignUp)}
					className="toggle-button"
				>
					{isSignUp
						? "Already have an account? Log In"
						: "Don't have an account? Sign Up"}
				</button>
			</div>
		</div>
	);
}

export default Login;
