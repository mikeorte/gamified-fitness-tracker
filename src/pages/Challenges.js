import React, { useState } from "react";
import "./Challenges.css"; 

function Challenges() {
	const [joinedChallenge, setJoinedChallenge] = useState("");
	const [unjoinedChallenges, setUnjoinedChallenges] = useState([
		"10-Day Yoga Challenge",
		"5K Run Challenge",
		"30-Day Plank Challenge",
		"Daily Meditation Challenge",
		"Weekly Cycling Challenge",
		"Monthly Swimming Challenge",
		"15-Day HIIT Challenge",
		"Daily Stretching Challenge",
		"Weekly Hiking Challenge",
	]);

	const handleJoinChallenge = (challenge) => {
		setJoinedChallenge(`You have joined the ${challenge}!`);
		setUnjoinedChallenges(unjoinedChallenges.filter((c) => c !== challenge));
	};

	return (
		<div className="challenges-container">
			<h2>Challenges</h2>
			<p>
				Compete with friends and achieve your fitness goals together! Join
				multiplayer challenges and track your progress in real-time.
			</p>
			<ul>
				<li>
					<strong>7-Day Step Challenge:</strong> Walk 10,000 steps each day for
					a week.
					<button onClick={() => handleJoinChallenge("7-Day Step Challenge")}>
						Join
					</button>
					<div className="progress-bar">
						<div className="progress" style={{ width: "50%" }}></div>
					</div>
					<p>Current progress: 35,000 steps out of 70,000 steps</p>
				</li>
				<li>
					<strong>Weight Loss Challenge:</strong> Lose 2% of your body weight in
					a month.
					<button onClick={() => handleJoinChallenge("Weight Loss Challenge")}>
						Join
					</button>
					<div className="progress-bar">
						<div className="progress" style={{ width: "30%" }}></div>
					</div>
					<p>Current progress: 1.5% weight loss out of 2%</p>
				</li>
				<li>
					<strong>Cardio Challenge:</strong> Complete 150 minutes of cardio
					exercises in a week.
					<button onClick={() => handleJoinChallenge("Cardio Challenge")}>
						Join
					</button>
					<div className="progress-bar">
						<div className="progress" style={{ width: "70%" }}></div>
					</div>
					<p>Current progress: 105 minutes out of 150 minutes</p>
				</li>
			</ul>
			{joinedChallenge && <p className="joined-message">{joinedChallenge}</p>}
			<h3>Unjoined Challenges</h3>
			<ul>
				{unjoinedChallenges.map((challenge) => (
					<li key={challenge}>
						<strong>{challenge}</strong>
						<button onClick={() => handleJoinChallenge(challenge)}>Join</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Challenges;
