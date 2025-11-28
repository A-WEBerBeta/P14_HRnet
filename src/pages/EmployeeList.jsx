import { useSelector } from "react-redux";
import EmployeeTable from "../components/EmployeeTable";
import Footer from "../components/Footer";

export default function EmployeeList() {
  // Retrieve employee list from Redux store
  const rows = useSelector((state) => state.employees.items);

  return (
    <>
      {/* Page title  */}
      <h2>Current Employees</h2>

      {/* Main table displaying all stored employees  */}
      <EmployeeTable rows={rows} />

      <Footer />
    </>
  );
}
