
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Movie Explorer. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
