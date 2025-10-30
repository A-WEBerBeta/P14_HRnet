import { Link, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <div>
      <nav>
        <Link to="/create">Create Employee</Link>
        <Link to="/employees">View Current Employees</Link>
      </nav>

      <Routes>
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </div>
  );
}

export default App;
