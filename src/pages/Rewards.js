import React from "react";
import "./Rewards.css";

function Rewards() {
	const currentPoints = 1200;

	return (
		<div className="rewards-container">
			<h2>Rewards</h2>
			<p>Earn points and redeem rewards!</p>
			<div className="points-display">
				<h3>Your Points: {currentPoints}</h3>
			</div>
			<div className="reward-list">
				<div className="reward-item">
					<div className="reward-details">
						<h3>Free Gym Pass</h3>
						<p>Get a free pass to any gym of your choice for a day.</p>
					</div>
				</div>
				<div className="reward-item">
					<div className="reward-details">
						<h3>Discount on Fitness Gear</h3>
						<p>
							Enjoy a 20% discount on all fitness gear from our partner stores.
						</p>
					</div>
				</div>
				<div className="reward-item">
					<div className="reward-details">
						<h3>Personal Training Session</h3>
						<p>
							Book a free personal training session with a certified trainer.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Rewards;
