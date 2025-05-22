import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; 
import './Navbar.css';

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();
  return <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>;
};

const Navbar: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Task Manager</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
        <li>
          {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <LoginButton />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;