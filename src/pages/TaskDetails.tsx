import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Task } from '../types/task';

const TaskDetails: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: '',
    status: 'pending' as 'pending' | 'completed',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const task: Task = {
      id: Math.random().toString(36).substr(2, 9),
      ...newTask,
    };
    setTasks([...tasks, task]);
    setNewTask({ title: '', description: '', dueDate: '', status: 'pending' });
    setShowForm(false);
  };

  const handleCancel = () => {
    setNewTask({ title: '', description: '', dueDate: '', status: 'pending' });
    setShowForm(false);
  };

  const handleComplete = (taskId: string, title: string) => {
    alert(`Marking task "${title}" as completed`);
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId ? { ...task, status: 'completed' } : task
      )
    );
  };

  const handleDelete = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-details-page">
      <h1>Task Details</h1>

      <button className="add-task-button" onClick={() => setShowForm(true)}>
        Add Task
      </button>

      {tasks.length === 0 ? (
        <p className="empty-message">Tasks Empty</p>
      ) : (
        <div className="tasks-list">
          {tasks.map((task) => (
            <div key={task.id} className="task-details-container">
              <h2>{task.title}</h2>
              <p><strong>Description:</strong> {task.description}</p>
              <p><strong>Due Date:</strong> {task.dueDate}</p>
              <p>
                <strong>Status:</strong>{' '}
                {task.status === 'completed' ? 'Completed' : 'Pending'}
              </p>

              {task.status === 'pending' && (
                <button
                  className="complete-button"
                  onClick={() => handleComplete(task.id, task.title)}
                >
                  Mark as Complete
                </button>
              )}
              <button
                className="delete-task-button"
                onClick={() => handleDelete(task.id)}
              >
                Delete Task
              </button>
            </div>
          ))}
        </div>
      )}

      {showForm && (
        <div className="task-form-container">
          <form onSubmit={handleSubmit} className="task-form">
            <div className="form-group">
              <label htmlFor="title">Task Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={newTask.title}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                id="description"
                name="description"
                value={newTask.description}
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
                value={newTask.dueDate}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Add Task
            </button>
            <button type="button" className="cancel-button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        </div>
      )}

      <NavLink to="/" className="back-to-home-button">
        Back to Home
      </NavLink>
    </div>
  );
};

export default TaskDetails;
