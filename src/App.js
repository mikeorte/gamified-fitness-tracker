import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Challenges from "./pages/Challenges";
import Rewards from "./pages/Rewards";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
	return (
		<Router>
			<Navbar />
			<div className="container">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/challenges" element={<Challenges />} />
					<Route path="/rewards" element={<Rewards />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
