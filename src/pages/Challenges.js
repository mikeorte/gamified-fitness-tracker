import React from 'react';
import ChallengeList from '../components/ChallengeList'; // Correct import path
import './Challenges.css'; // Import Challenges styles

function Challenges() {
  return (
    <div className="challenges-container">
      <h2>Challenges</h2>
      <ChallengeList />
    </div>
  );
}

export default Challenges;