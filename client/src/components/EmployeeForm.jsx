import { useState, useEffect } from "react";

function EmployeeForm({ editingEmployee, onSubmit, onCancel }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
    role: ""
  });

  useEffect(() => {
    if (editingEmployee && Object.keys(editingEmployee).length > 0) {
      setForm(editingEmployee);
    } else {
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        department: "",
        role: ""
      });
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, department, role } = form;

    if (!firstName || !lastName || !email || !department || !role) {
      return alert("All fields are required");
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return alert("Invalid email format");
    }

    onSubmit(form);
    setForm({ firstName: "", lastName: "", email: "", department: "", role: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{form.id ? "Edit" : "Add"} Employee</h3>

      {Object.keys(form).map((key) =>
        key !== "id" ? (
          <input
            key={key}
            name={key}
            value={form[key]}
            onChange={handleChange}
            placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
          />
        ) : null
      )}

      <div className="form-buttons">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
}

export default EmployeeForm;
