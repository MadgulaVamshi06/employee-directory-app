import React from 'react';

const Navbar = ({ onSearch, onToggleFilterSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">Employee Directory</div>

      <input
        type="text"
        className="nav-search"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />

      <button
        className="filter-button"
        onClick={onToggleFilterSidebar}
      >
        Filter
      </button>
    </nav>
  );
};

export default Navbar;
