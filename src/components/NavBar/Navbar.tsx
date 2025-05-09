import React, { Component } from 'react'; 
import { NavLink } from 'react-router-dom';
import Register from '../../pages/Register';
import './NavStyles.css'; 

interface NavbarState {
  showLoginForm: boolean;
}

export class Navbar extends Component<{}, NavbarState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      showLoginForm: false,
    };
  }

  toggleLoginForm = () => {
    this.setState((prevState) => ({
      showLoginForm: !prevState.showLoginForm,
    }));
  };

  render() {
    const { showLoginForm } = this.state;

    return (
      <div className="nav-container">
        <div className="navbar-brand">
          <h1>TASK MANAGER</h1>
        </div>

        <div className="navbar-links">
          <NavLink to="/" className="NavHome">Home</NavLink>
          <NavLink to="/task/1" className="navDetails">Task Details</NavLink>
                  </div>

        <div className="login-container">
          <button className="nav-link login-button" onClick={this.toggleLoginForm}>
            Login
          </button>

          {showLoginForm && (
            <div className="login-form-dropdown">
              <form className="login-form">
                <input type="text" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Log In</button>
              </form>
            <div className="Reg-Message">
                <h2>First time?</h2>
                <p>Register for FREE!</p>
                <Register /> {/* styling in App.css */}
            </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;


