
import React, { useState } from 'react';
import './Header.css';
import SignInForm from './SignInForm'; 

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <header className="header">
      <div className="header-content">
        <h1>Movie Explorer</h1>
        <div className="sign-in-button" onClick={toggleLoginForm}>
          <button>Sign In / Sign Up</button>
        </div>
        {showLoginForm && <SignInForm onClose={toggleLoginForm} />}
        
      </div>
    </header>
  );
};

export default Header;
