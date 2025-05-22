import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import { TaskForm } from './components/TaskForm';
import { TaskList } from './components/TaskList';
import Navbar from './components/Navbar'; 
import LoginPage from './LoginPage';
import PrivateRoute from './components/PrivateRoute'; 

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
                </>} />
                <Route path="/login" element={<LoginPage />} />

                <Route
                  path="/add"
                  element={
                    <PrivateRoute>
                      <TaskForm />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/tasks"
                  element={
                    <PrivateRoute>
                      <TaskList />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute>
                      <h2>Welcome to your Dashboard! (This is a protected page)</h2>
                    </PrivateRoute>
                  }
                />
              </Routes>
            </main>
          </div>
        </TaskProvider>
      </Router>
    </div>
  );
}