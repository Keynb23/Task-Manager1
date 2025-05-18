import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export function TaskForm() {
    const { addTask } = useTasks();
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title.trim()) {
            addTask({ id: crypto.randomUUID(), title, completed: false });
            setTitle("");
        }
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div className="search-bar">
                <input
                    className="add-task-form"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a task"
                />
                <button className="add-btn holographic-card" type="submit">
                    <span>Add</span>
                </button>
            </div>
        </form>
    );
}