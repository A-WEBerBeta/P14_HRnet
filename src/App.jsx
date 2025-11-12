import { Link, Route, Routes } from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";

function App() {
  return (
    <>
      <nav>
        <Link to="/create">Create Employee</Link>
        <Link to="/employees">Employee List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/create" element={<CreateEmployee />} />
        <Route path="/employees" element={<EmployeeList />} />
      </Routes>
    </>
  );
}

export default App;
