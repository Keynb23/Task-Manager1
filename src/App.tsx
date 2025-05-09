import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TaskDetails from "./pages/TaskDetails";
import Navbar from "./components/NavBar/Navbar";
import { TaskProvider } from "./context/TaskContext";
import "./App.css";

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="App">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
          >
            <source src="/assets/fire.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/task/:id" element={<TaskDetails />} />
          </Routes>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
