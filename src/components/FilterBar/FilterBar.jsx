// src/components/FilterBar/FilterBar.js
import React from 'react';
import './FilterBar.css';

const FilterBar = ({ filters }) => {
  return (
    <div className="filter-bar">
      {filters.map((filter, index) => (
        <button key={index} className="filter-button">{filter}</button>
      ))}
    </div>
  );
};

export default FilterBar;