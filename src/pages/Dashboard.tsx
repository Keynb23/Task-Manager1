import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import TaskForm from '../components/TaskForm';
import type { Task } from '../types/task';


const Dashboard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showForm, setShowForm] = useState(false);

  const addTask = (task: Task) => {
    setTasks([...tasks, task]);
    setShowForm(false);
};

  return (
    <div className="dashboard-container">

      <button
        className="add-task-button"
        onClick={() => setShowForm(true)}
      >
        Add Task
      </button>

      {showForm && (
        <TaskForm
          onSubmit={addTask}
          onCancel={() => setShowForm(false)}
        />
      )}

      {tasks.length === 0 ? (
        <p className="no-tasks-message">No Tasks Available</p>
      ) : (
        <div className="tasks-list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;