import React from 'react';
import ProgressChart from '../components/ProgressChart';
import GoalSetter from '../components/GoalSetter';
import './Dashboard.css'; // Import Dashboard specific styles

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Track your progress and set new goals.</p>
      <ProgressChart />
      <GoalSetter />
    </div>
  );
}

export default Dashboard;