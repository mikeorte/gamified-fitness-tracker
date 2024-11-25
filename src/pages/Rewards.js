import React from 'react';
import './Rewards.css'; // Import Rewards specific styles

function Rewards() {
  return (
    <div className="rewards-container">
      <h2>Rewards</h2>
      <p>Earn points and redeem rewards!</p>
      <div className="reward-list">
        <div className="reward-item">Free Gym Pass</div>
        <div className="reward-item">Discount on Fitness Gear</div>
        <div className="reward-item">Personal Training Session</div>
      </div>
    </div>
  );
}

export default Rewards;