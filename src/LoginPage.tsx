import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);

    } else {
      setIsLoggedIn(false);
    }
  }, []); 

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Login attempt with:', { email, password });
      localStorage.setItem('authToken', 'your_mock_auth_token'); 
      setIsLoggedIn(true);
      navigate('/dashboard'); 
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome to Task Manager</h1>

      {isLoggedIn ? (

        <p>You are already logged in. Redirecting to dashboard...</p>

      ) : (
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              className="form-input"
            />
          </div>
          {error && <p className="error-message">{error}</p>}

          <button
            type="submit"
            className="login-button"
            aria-label="Log in to Task Manager"
          >
            Log In
          </button>
        </form>
      )}
    </div>
  );
};

export default LoginPage;