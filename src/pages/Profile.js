import React, { useState } from "react";
import "./Profile.css"; // Import Profile styles

function Profile() {
	const [useMetric, setUseMetric] = useState(true);
	const [height, setHeight] = useState(180);
	const [weight, setWeight] = useState(75);
	const [profilePicture, setProfilePicture] = useState(null);
	const [username] = useState("TestUser");
	const [email] = useState("test@test.com");
	const [bio] = useState("Fitness enthusiast and marathon runner.");

	const toggleUnitSystem = () => {
		if (useMetric) {
			setHeight((prevHeight) => (prevHeight / 2.54).toFixed(2)); // Convert cm to inches
			setWeight((prevWeight) => (prevWeight * 2.20462).toFixed(2)); // Convert kg to lbs
		} else {
			setHeight((prevHeight) => (prevHeight * 2.54).toFixed(2)); // Convert inches to cm
			setWeight((prevWeight) => (prevWeight / 2.20462).toFixed(2)); // Convert lbs to kg
		}
		setUseMetric(!useMetric);
	};

	const handleProfilePictureChange = (e) => {
		setProfilePicture(URL.createObjectURL(e.target.files[0]));
	};

	return (
		<div className="profile-container">
			<h2>User Profile</h2>
			<div className="toggle-switch">
				<input
					type="checkbox"
					id="unit-toggle"
					checked={useMetric}
					onChange={toggleUnitSystem}
				/>
				<label htmlFor="unit-toggle" className="toggle-label">
					<span className="toggle-inner" />
					<span className="toggle-switch" />
				</label>
				<span>{useMetric ? "Metric" : "Imperial"}</span>
			</div>
			<div className="profile-info">
				<div className="profile-picture">
					{profilePicture ? (
						<img src={profilePicture} alt="Profile" />
					) : (
						<p>No profile picture</p>
					)}
					<input type="file" onChange={handleProfilePictureChange} />
				</div>
				<p>
					<strong>Username:</strong> {username}
				</p>
				<p>
					<strong>Email:</strong> {email}
				</p>
				<p>
					<strong>Bio:</strong> {bio}
				</p>
				<p>
					<strong>Height:</strong> {height} {useMetric ? "cm" : "in"}
				</p>
				<p>
					<strong>Weight:</strong> {weight} {useMetric ? "kg" : "lbs"}
				</p>
				<p>
					<strong>Date of Joining:</strong> Jan 1, 2023
				</p>
			</div>
		</div>
	);
}

export default Profile;
