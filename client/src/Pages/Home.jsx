import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MiniNavbar from "../components/MiniNavbar";
import EmployeeCard from "../components/EmployeeCard";
import EmployeeForm from "../components/EmployeeForm";
import FilterSidebar from "../components/FilterSidebar";
import { employees as mockEmployees } from "../data/mockEmployees";
import { getEmployeesFromStorage, saveEmployeesToStorage } from "../utils/localStorage";
import "../App.css";

function Home() {
  const [employees, setEmployees] = useState([]);
  const [filters, setFilters] = useState({ search: "", firstName: "", department: "", role: "" });
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(false);

  useEffect(() => {
    const stored = getEmployeesFromStorage();
    if (stored.length === 0) {
      saveEmployeesToStorage(mockEmployees);
      setEmployees(mockEmployees);
    } else {
      setEmployees(stored);
    }
  }, []);

  const handleSubmit = (emp) => {
    const updated = emp.id
      ? employees.map((e) => (e.id === emp.id ? emp : e))
      : [...employees, { ...emp, id: Date.now() }];
    setEmployees(updated);
    saveEmployeesToStorage(updated);
    setEditingEmployee(null);
  };

  const handleDelete = (id) => {
    const updated = employees.filter((e) => e.id !== id);
    setEmployees(updated);
    saveEmployeesToStorage(updated);
  };

  let data = employees.filter((e) => {
    return (
      (!filters.search ||
        e.firstName.toLowerCase().includes(filters.search.toLowerCase()) ||
        e.email.toLowerCase().includes(filters.search.toLowerCase())) &&
      (!filters.firstName || e.firstName.toLowerCase().includes(filters.firstName.toLowerCase())) &&
      (!filters.department || e.department.toLowerCase().includes(filters.department.toLowerCase())) &&
      (!filters.role || e.role.toLowerCase().includes(filters.role.toLowerCase()))
    );
  });

  if (sortKey) {
    data.sort((a, b) => a[sortKey].localeCompare(b[sortKey]));
  }

  const paginated = data.slice((page - 1) * perPage, page * perPage);

  return (
    <>
      <Navbar
        onSearch={(value) => setFilters({ ...filters, search: value })}
        onToggleFilterSidebar={() => setSidebarVisible(true)}
      />

      <MiniNavbar
        onSort={setSortKey}
        onShowChange={setPerPage}
        onAdd={() => setEditingEmployee({})}
      />

      {editingEmployee && (
        <EmployeeForm
          editingEmployee={editingEmployee}
          onSubmit={handleSubmit}
          onCancel={() => setEditingEmployee(null)}
        />
      )}

      <FilterSidebar
        visible={sidebarVisible}
        filters={filters}
        onChange={(key, value) => setFilters({ ...filters, [key]: value })}
        onClose={() => setSidebarVisible(false)}
        onApply={() => setSidebarVisible(false)}
        onReset={() => setFilters({ search: "", firstName: "", department: "", role: "" })}
      />

      <div className="grid">
        {paginated.map((emp) => (
          <EmployeeCard
            key={emp.id}
            employee={emp}
            onEdit={() => setEditingEmployee(emp)}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
