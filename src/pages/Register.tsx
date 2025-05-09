import React, { useState } from "react";

{/* styling in App.css */}

interface RegisterValues {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterValues>({
    username: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Replace with your backend integration
    console.log('Registration data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="RegisterForm-Container">
        <label htmlFor="username"></label>
        <input
          type="text" placeholder="Username"
          id="username" 
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="email"></label>
        <input
          type="email" placeholder="Email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="password"></label>
        <input
          type="password" placeholder="Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
      </div>

      <button id="submit-btn" type="submit">Register</button>
    </form>
  );
};

export default Register;
