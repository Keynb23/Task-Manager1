import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; 
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0(); 
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (isAuthenticated) {
      navigate('/dashboard'); 
    } else {
      loginWithRedirect(); 
    }
  }, [isAuthenticated, isLoading, navigate, loginWithRedirect]);

  if (isLoading) {
    return (
      <div className="login-container">
        <h1 className="login-title">Loading authentication...</h1>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h1 className="login-title">Welcome to Task Manager</h1>
      <p>Redirecting to login. If not, click the login button in the navigation bar.</p>
    </div>
  );
};

export default LoginPage;