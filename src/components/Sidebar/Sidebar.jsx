// src/components/Sidebar/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul className="sidebar-list">
          <li className="sidebar-item">Home</li>
          <li className="sidebar-item">Shorts</li>
          <li className="sidebar-item">Subscriptions</li>
          <li className="sidebar-item">You &gt;</li>
          <li className="sidebar-item">History</li>
          <li className="sidebar-item">Playlists</li>
          <li className="sidebar-item">Your videos</li>
          <li className="sidebar-item">Your courses</li>
          <li className="sidebar-item">Watch later</li>
          <li className="sidebar-item">Liked videos</li>
          <li className="sidebar-item">Your clips</li>
          <li className="sidebar-item">Subscriptions</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;