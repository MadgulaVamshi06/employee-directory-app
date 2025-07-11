import React from "react";

function FilterSidebar({ visible, filters, onChange, onClose, onApply, onReset }) {
  return (
    <div className={`sidebar ${visible ? "visible" : ""}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      <h3>Filter & Sort</h3>

      <div className="filter-group">
        <label>Search</label>
        <input
          type="text"
          placeholder="Search by name/email"
          value={filters.search}
          onChange={(e) => onChange("search", e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={filters.firstName}
          onChange={(e) => onChange("firstName", e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Department</label>
        <input
          type="text"
          placeholder="Department"
          value={filters.department}
          onChange={(e) => onChange("department", e.target.value)}
        />
      </div>

      <div className="filter-group">
        <label>Role</label>
        <input
          type="text"
          placeholder="Role"
          value={filters.role}
          onChange={(e) => onChange("role", e.target.value)}
        />
      </div>

      <div className="sidebar-buttons">
        <button className="apply-btn" onClick={onApply}>Apply</button>
        <button className="reset-btn" onClick={onReset}>Reset</button>
      </div>
    </div>
  );
}

export default FilterSidebar;
