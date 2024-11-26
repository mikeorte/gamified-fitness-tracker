import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="home-container">
        <h1>Welcome to the Gamified Fitness Tracker</h1>
        <p>Track your fitness goals and compete with friends!</p>
        <div className="features">
          <div className="feature">
            <h2>Gamification</h2>
            <p>Earn badges and points for reaching fitness milestones.</p>
          </div>
          <div className="feature">
            <h2>Multiplayer Challenges</h2>
            <p>Compete with friends to achieve shared goals.</p>
          </div>
          <div className="feature">
            <h2>Real-Time Tracking</h2>
            <p>Integration with wearable devices for live updates.</p>
          </div>
          <div className="feature">
            <h2>Progress Visualization</h2>
            <p>Interactive charts and leaderboards.</p>
          </div>
          <div className="feature">
            <h2>Customizable Goals</h2>
            <p>Set personal fitness targets tailored to individual preferences.</p>
          </div>
          <div className="feature">
            <h2>Responsive Design</h2>
            <p>Optimized for mobile devices.</p>
          </div>
        </div>
        <Link to="/signup" className="cta-button">Join Us Today</Link>
      </div>
    </div>
  );
}

export default Home;