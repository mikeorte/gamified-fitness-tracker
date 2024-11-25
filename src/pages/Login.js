import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Import Login styles

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isSignUp, setIsSignUp] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isSignUp) {
			// Handle sign-up logic here
		} else {
			// Handle login logic here
			if (email === "test@test.com" && password === "test123") {
				navigate("/dashboard");
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
