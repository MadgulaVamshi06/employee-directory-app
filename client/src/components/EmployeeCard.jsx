import React from 'react';


function EmployeeCard({ employee, onEdit, onDelete }) {
  return (
    <div className="employee-card">
      <p><strong>ID:</strong> {employee.id}</p>
      <p><strong>Name:</strong> {employee.firstName} {employee.lastName}</p>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Department:</strong> {employee.department}</p>
      <p><strong>Role:</strong> {employee.role}</p>

      <div className="card-buttons">
        <button className="edit-btn" onClick={() => onEdit(employee)}>Edit</button>
        <button className="delete-btn" onClick={() => onDelete(employee.id)}>Delete</button>
      </div>
    </div>
  );
}

export default EmployeeCard;
