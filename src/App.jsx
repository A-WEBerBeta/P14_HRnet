import { Link, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";

/**
 * Main application component
 *
 * Handles:
 * - Navigation links
 * - Route definitions
 * - Page rendering based on the URL
 */
function App() {
  return (
    <>
      <nav>
        <Link to="/">Create Employee</Link>
        <Link to="/employees">Employee List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </>
  );
}

export default App;
