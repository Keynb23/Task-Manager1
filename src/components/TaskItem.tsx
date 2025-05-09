import React from 'react';
import { NavLink } from 'react-router-dom';
import type { Task } from '../types/task';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <div className="task-item-container">
      <h3>{task.title}</h3>
      <p><strong>Due Date:</strong> {task.dueDate}</p>
      <p>
        <strong>Status:</strong>{' '}
        {task.status === 'completed' ? '✅ Completed' : '⏳ Pending'}
      </p>
      <NavLink
        to={`/details/${task.id}`}
        className="view-details-button"
      >
        View Details
      </NavLink>
    </div>
  );
};

export default TaskItem;