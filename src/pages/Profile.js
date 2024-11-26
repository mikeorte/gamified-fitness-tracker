import React, { useState } from "react";
import "./Profile.css";

function Profile() {
	const [useMetric, setUseMetric] = useState(true);
	const [height, setHeight] = useState(180);
	const [weight, setWeight] = useState(75);
	const [profilePicture, setProfilePicture] = useState(null);
	const [username] = useState("TestUser");
	const [email] = useState("test@test.com");
	const [bio] = useState("Fitness enthusiast and marathon runner.");
	const [showProgressToFriends, setShowProgressToFriends] = useState(true);
	const [friends, setFriends] = useState([
		{
			name: "Alice",
			goal: "Run 5K daily",
			sharedChallenges: ["7-Day Step Challenge"],
		},
		{
			name: "Bob",
			goal: "Lose 5kg in a month",
			sharedChallenges: ["Weight Loss Challenge"],
		},
		{
			name: "Charlie",
			goal: "Cycle 10km daily",
			sharedChallenges: ["Cardio Challenge"],
		},
	]);
	const [pendingRequests, setPendingRequests] = useState(["TestUser2"]);
	const [incomingRequests, setIncomingRequests] = useState(["TestUser3"]);
	const [newFriendUsername, setNewFriendUsername] = useState("");

	const wearableData = {
		device: "Fitbit Charge 4",
		steps: 8500,
		heartRate: 75,
		caloriesBurned: 500,
	};

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
				<div className="toggle-switch">
					<input
						type="checkbox"
						id="progress-toggle"
						checked={showProgressToFriends}
						onChange={toggleShowProgressToFriends}
					/>
					<label htmlFor="progress-toggle" className="toggle-label">
						<span className="toggle-inner" />
						<span className="toggle-switch" />
					</label>
					<span>Show Challenge Progress to Friends</span>
				</div>
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
