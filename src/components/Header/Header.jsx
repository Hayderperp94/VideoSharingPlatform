// src/components/Header/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src="youtube-logo.png" alt="YouTube Logo" className="youtube-logo" />
        <span>YouTube</span>
      </div>
      <div className="header-center">
        <input type="text" placeholder="Search" className="search-input" />
        <button className="search-button">Search</button>
      </div>
      <div className="header-right">
        <button className="create-button">Create</button>
        <img src="profile-icon.png" alt="Profile" className="profile-icon" />
      </div>
    </header>
  );
};

export default Header;