import React, { useState } from "react";
import './styles.scss'

export const TaskCard = () => {
  const [isTaskDone, setIsTaskDone] = useState(false);
  return (
    <div
      className={`task-card-container ${
        isTaskDone ? "task-card-done" : "to-do-task-card"
      }`}
    >
      <div className="task-card-header">
        <div className="task-card-name-info">
          <div className="task-emoji-container">🧘‍♀️</div>
          <h2 className="task-card-title">Morning Yoga</h2>
        </div>
        <span className="task-card-time">07:30 AM</span>
      </div>

      <div className="task-card-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </div>
    </div>
  );
};

export default TaskCard;
