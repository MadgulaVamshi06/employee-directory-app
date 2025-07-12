# Employee Directory App (Client)

This is the client-side React application for the Employee Directory. It allows you to view, add, edit, delete, filter, and sort employees in a simple, modern UI.

## Features

- View a list of employees with details (name, email, department, role)
- Add new employees
- Edit existing employee details
- Delete employees
- Search, filter, and sort employees
- Responsive design

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) (for fast development)
- [React Router](https://reactrouter.com/) (for routing)
- LocalStorage (for data persistence)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173) by default.

### Build for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

- `src/` - Main source code
  - `components/` - Reusable UI components
  - `Pages/` - Page-level components
  - `data/` - Mock employee data
  - `utils/` - Utility functions (e.g., localStorage helpers)
- `public/` - Static assets
- `index.html` - Main HTML entry point

## Customization

- To change the initial employee data, edit `src/data/mockEmployees.js`.
- All employee data is stored in the browser's LocalStorage.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


