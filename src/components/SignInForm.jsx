
import React, { useState } from 'react';
import './SignInForm.css'; 

const SignInForm = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    console.log(`Signing in with username: ${username} and password: ${password}`);
    
    onClose();
  };

  return (
    <div className="sign-in-form">
      <div className="form-header">
        <h2>Sign In / Sign Up</h2>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
      </div>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="checkbox"
          id="showPassword"
          checked={showPassword}
          onChange={() => setShowPassword(!showPassword)}
        />
        <label htmlFor="showPassword">Show Password</label>
      </div>
      <button className="sign-in-button" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
};

export default SignInForm;
