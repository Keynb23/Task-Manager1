import React, { useState } from 'react';
import type { Task } from '../types/task';

interface TaskFormProps {
  onSubmit: (task: Task) => void;
  onCancel: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit, onCancel }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'pending' as 'pending' | 'completed',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask((prev) => ({
      ...prev,
      status: e.target.checked ? 'completed' : 'pending',
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Math.random().toString(36).substr(2, 9),
      ...task,
    });
    setTask({ title: '', description: '', dueDate: '', status: 'pending' });
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit} className="task-form">
        <div className="form-group">
          <label htmlFor="title">Task Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={task.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={task.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            value={task.dueDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="status">Completed:</label>
          <input
            type="checkbox"
            id="status"
            checked={task.status === 'completed'}
            onChange={handleStatusChange}
          />
        </div>
        <div className="form-buttons">
          <button type="submit" className="submit-button">
            Add Task
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;