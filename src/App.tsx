import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import Navbar from './components/Navbar';
import LoginPage from './LoginPage';

export function App() {
  return (
    <div className="app-wrapper">
      <div>
        <p className="app-description">this div needs to be here or the app won't work. Idk man</p>
      </div>
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <TaskProvider>
          <div className="content-box">
            <Navbar />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<>
                      <TaskForm />
                      <TaskList />
                      </>}
                      />
                <Route path="/add" element={<TaskForm />} />
                <Route path="/tasks" element={<TaskList />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </main>
          </div>
        </TaskProvider>
      </Router>
    </div>
  );
}