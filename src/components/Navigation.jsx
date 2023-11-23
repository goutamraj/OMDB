
import React from 'react';
import './Navigation.css';
import FetchMovies from './FetchMovies';

const Navigation = () => {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="menu-bar">
          <span>MENU</span>
          <div className="menu-dropdown">
            <ul>
              <li>Movies</li>
              <li>TV Shows</li>
              <li>Celebs</li>
              <li>Awards and Events</li>
              <li>Community</li>
            </ul>
          </div>
        </div>
        <div className="search-bar">
          
        </div>
        <div className="language-dropdown">
          <span>English</span>
          <div className="language-options">
            <ul>
              <li>Hindi</li>
              <li>Espanol</li>
              <li>Italiano</li>
              <li>Francais</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
