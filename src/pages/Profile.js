import React, { useState, useEffect } from "react";
import "./Profile.css";
import data from "../data.json"; // Import initial data from JSON file

function Profile() {
	const [useMetric, setUseMetric] = useState(data.profile.useMetric);
	const [height, setHeight] = useState(data.profile.height);
	const [weight, setWeight] = useState(data.profile.weight);
	const [profilePicture, setProfilePicture] = useState(data.profile.profilePicture);
	const [username, setUsername] = useState(data.profile.username);
	const [email, setEmail] = useState(data.profile.email);
	const [bio, setBio] = useState(data.profile.bio);
	const [showProgressToFriends, setShowProgressToFriends] = useState(data.profile.showProgressToFriends);
	const [friends, setFriends] = useState(data.profile.friends);
	const [pendingRequests, setPendingRequests] = useState(data.profile.pendingRequests);
	const [incomingRequests, setIncomingRequests] = useState(data.profile.incomingRequests);
	const [newFriendUsername, setNewFriendUsername] = useState("");
	const [isEditing, setIsEditing] = useState(false);

	const wearableData = {
		device: "Fitbit Charge 4",
		steps: 8500,
		heartRate: 75,
		caloriesBurned: 500,
	};

	useEffect(() => {
		const storedProfile = JSON.parse(localStorage.getItem("profile"));
		if (storedProfile) {
			setUseMetric(storedProfile.useMetric);
			setHeight(storedProfile.height);
			setWeight(storedProfile.weight);
			setProfilePicture(storedProfile.profilePicture);
			setUsername(storedProfile.username);
			setEmail(storedProfile.email);
			setBio(storedProfile.bio);
			setShowProgressToFriends(storedProfile.showProgressToFriends);
			setFriends(storedProfile.friends);
			setPendingRequests(storedProfile.pendingRequests);
			setIncomingRequests(storedProfile.incomingRequests);
		}
	}, []);

	useEffect(() => {
		const profile = {
			useMetric,
			height,
			weight,
			profilePicture,
			username,
			email,
			bio,
			showProgressToFriends,
			friends,
			pendingRequests,
			incomingRequests,
		};
		localStorage.setItem("profile", JSON.stringify(profile));
	}, [useMetric, height, weight, profilePicture, username, email, bio, showProgressToFriends, friends, pendingRequests, incomingRequests]);

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

	const toggleShowProgressToFriends = () => {
		setShowProgressToFriends(!showProgressToFriends);
	};

	const handleAddFriend = () => {
		if (newFriendUsername) {
			setPendingRequests([...pendingRequests, newFriendUsername]);
			setNewFriendUsername("");
		}
	};

	const handleCancelRequest = (username) => {
		setPendingRequests(pendingRequests.filter((request) => request !== username));
	};

	const handleApproveRequest = (username) => {
		setFriends([...friends, { name: username, goal: "", sharedChallenges: [] }]);
		setIncomingRequests(incomingRequests.filter((request) => request !== username));
	};

	const handleDenyRequest = (username) => {
		setIncomingRequests(incomingRequests.filter((request) => request !== username));
	};

	const handleSaveChanges = () => {
		const profile = {
			useMetric,
			height,
			weight,
			profilePicture,
			username,
			email,
			bio,
			showProgressToFriends,
			friends,
			pendingRequests,
			incomingRequests,
		};
		localStorage.setItem("profile", JSON.stringify(profile));
		alert("Profile updated successfully!");
		setIsEditing(false);
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
					disabled={!isEditing}
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
					{isEditing && <input type="file" onChange={handleProfilePictureChange} />}
				</div>
				<p>
					<strong>Username:</strong> {username}
				</p>
				<p>
					<strong>Email:</strong> {email}
				</p>
				<p>
					<strong>Bio:</strong>
					{isEditing ? (
						<input
							type="text"
							value={bio}
							onChange={(e) => setBio(e.target.value)}
						/>
					) : (
						bio
					)}
				</p>
				<p>
					<strong>Height:</strong>
					{isEditing ? (
						<input
							type="number"
							value={height}
							onChange={(e) => setHeight(e.target.value)}
						/>
					) : (
						`${height} ${useMetric ? "cm" : "in"}`
					)}
				</p>
				<p>
					<strong>Weight:</strong>
					{isEditing ? (
						<input
							type="number"
							value={weight}
							onChange={(e) => setWeight(e.target.value)}
						/>
					) : (
						`${weight} ${useMetric ? "kg" : "lbs"}`
					)}
				</p>
				<p>
					<strong>Date of Joining:</strong> Jan 1, 2023
				</p>
				<div className="toggle-switch">
					<input
						type="checkbox"
						id="progress-toggle"
						checked={showProgressToFriends}
						onChange={toggleShowProgressToFriends}
						disabled={!isEditing}
					/>
					<label htmlFor="progress-toggle" className="toggle-label">
						<span className="toggle-inner" />
						<span className="toggle-switch" />
					</label>
					<span>Show Challenge Progress to Friends</span>
				</div>
				{isEditing ? (
					<button onClick={handleSaveChanges} className="save-button">
						Save Changes
					</button>
				) : (
					<button onClick={() => setIsEditing(true)} className="edit-button">
						Edit
					</button>
				)}
			</div>
			<h3>Friends</h3>
			<div className="friends-section">
				{friends.map((friend) => (
					<div key={friend.name} className="friend">
						<p>
							<strong>{friend.name}</strong>
						</p>
						<p>Goal: {friend.goal}</p>
						<p>Shared Challenges: {friend.sharedChallenges.join(", ")}</p>
					</div>
				))}
			</div>
			<div className="add-friend">
				<h4>Add a Friend</h4>
				<input
					type="text"
					placeholder="Friend's Username"
					value={newFriendUsername}
					onChange={(e) => setNewFriendUsername(e.target.value)}
				/>
				<button onClick={handleAddFriend}>Add Friend</button>
			</div>
			<h4>Pending Requests</h4>
			<div className="pending-requests">
				{pendingRequests.length > 0 && (
					<>
						<h5>Outgoing Requests</h5>
						{pendingRequests.map((request, index) => (
							<div key={index} className="request">
								<p>{request}</p>
								<button className="cancel-button" onClick={() => handleCancelRequest(request)}>Cancel</button>
							</div>
						))}
					</>
				)}
				{incomingRequests.length > 0 && (
					<>
						<h5>Incoming Requests</h5>
						{incomingRequests.map((request, index) => (
							<div key={index} className="request">
								<p>{request}</p>
								<button className="approve-button" onClick={() => handleApproveRequest(request)}>Approve</button>
								<button className="deny-button" onClick={() => handleDenyRequest(request)}>Deny</button>
							</div>
						))}
					</>
				)}
				{pendingRequests.length === 0 && incomingRequests.length === 0 && (
					<p>No pending requests</p>
				)}
			</div>
			<h3>Integration with Wearable Devices</h3>
			<div className="wearable-section">
				<p>
					<strong>Device:</strong> {wearableData.device}
				</p>
				<p>
					<strong>Steps:</strong> {wearableData.steps}
				</p>
				<p>
					<strong>Heart Rate:</strong> {wearableData.heartRate} bpm
				</p>
				<p>
					<strong>Calories Burned:</strong> {wearableData.caloriesBurned} kcal
				</p>
			</div>
		</div>
	);
}

export default Profile;
