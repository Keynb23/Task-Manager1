import { createContext, useContext, useState, type ReactNode } from "react";

export interface Task {
    id: string;
    title: string;
    completed: boolean;
}

interface TaskContextType {
    tasks: Task[];
    addTask: (task: Task) => void;
    toggleTask: (id: string) => void;
    deleteCheckedTasks: () => void;
    selectAllTasks: () => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (task: Task) => {
        setTasks([...tasks, { ...task, completed: false }]);
    };

    const toggleTask = (id: string) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteCheckedTasks = () => {
        setTasks(tasks.filter(task => !task.completed));
    };

    const selectAllTasks = () => {
        setTasks(tasks.map(task => ({ ...task, completed: true })));
    };

    return (
        <TaskContext.Provider
            value={{ tasks, addTask, toggleTask, deleteCheckedTasks, selectAllTasks }}
        >
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
}