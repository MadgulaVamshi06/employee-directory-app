function MiniNavbar({ onSort, onShowChange, onAdd }) {
  return (
    <div className="mini-navbar">
      <select className="mini-select" onChange={(e) => onSort(e.target.value)}>
        <option value="">Sort By</option>
        <option value="firstName">First Name</option>
        <option value="department">Department</option>
      </select>

      <select className="mini-select" onChange={(e) => onShowChange(Number(e.target.value))}>
        <option value={10}>Show 10</option>
        <option value={15}>Show 15</option>
        <option value={25}>Show 25</option>
        <option value={50}>Show 50</option>
      </select>

      <div className="spacer" />

      <button className="add-button" onClick={onAdd}>
        Add Employee
      </button>
    </div>
  );
}

export default MiniNavbar;
