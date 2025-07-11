// src/utils/localStorage.js

const EMPLOYEE_KEY = "employeeData";

export function getEmployeesFromStorage() {
  return JSON.parse(localStorage.getItem(EMPLOYEE_KEY)) || [];
}

export function saveEmployeesToStorage(data) {
  localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(data));
}
