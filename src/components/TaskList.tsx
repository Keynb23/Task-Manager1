import { useTasks } from '../context/TaskContext';

export function TaskList() {
  const { tasks, toggleTask, deleteCheckedTasks, selectAllTasks } = useTasks();

  return (
    <div className="task-list-container">
      {tasks.length === 0 ? (
        <p>No tasks available. Add a task to get started!</p>
      ) : (
        <>
          <ul>
            {tasks.map((task) => (
              <li key={task.id} className="task-item">
                <div className="task-checkbox-container">
                  <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                  />
                </div>
                <span className={`task-title ${task.completed ? 'completed' : ''}`}>
                  {task.title}
                </span>
              </li>
            ))}
          </ul>
          <div className="task-list-controls">
            <button
              className="select-all-btn holographic-card"
              onClick={selectAllTasks}
            >
              <span>Select All</span>
            </button>
            <button
              className="delete-btn holographic-card"
              onClick={deleteCheckedTasks}
            >
              <span>Delete Selected</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}