import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">Task Manager</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;