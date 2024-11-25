import React from 'react';

function GoalSetter() {
  return (
    <div className="goal-setter">
      <h3>Set Your Goals</h3>
      <form>
        <input type="text" placeholder="Enter your goal" />
        <button type="submit">Set Goal</button>
      </form>
    </div>
  );
}

export default GoalSetter;