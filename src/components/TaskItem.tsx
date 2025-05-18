import type { Task } from "../context/TaskContext";
import { useTasks } from "../context/TaskContext";

export function TaskItem({ task }: { task: Task }) {
    const { toggleTask } = useTasks();

    return (
        <li className="task-item">
            <label className="holographic-card task-checkbox-container">
                <input
                    type="checkbox"
                    className="task-checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                />
            </label>
            <span className={task.completed ? "task-title completed" : "task-title"}>
                {task.title}
            </span>
        </li>
    );
}