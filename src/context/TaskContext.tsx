import React, { createContext, useState, type ReactNode } from "react";
import { type Task } from "../types/task";

interface TaskContextProps {
  tasks: Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: string) => void;
}

export const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    // add task to state
  };

  const updateTask = (updatedTask: Task) => {
    // update task in state
  };

  const deleteTask = (id: string) => {
    // remove task by id
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
