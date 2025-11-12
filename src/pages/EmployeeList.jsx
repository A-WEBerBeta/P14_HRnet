import { useSelector } from "react-redux";
import EmployeeTable from "../components/EmployeeTable";
import Footer from "../components/Footer";

export default function EmployeeList() {
  const rows = useSelector((state) => state.employees.items);

  return (
    <>
      <h2>Current Employees</h2>
      <EmployeeTable rows={rows} />
      <Footer />
    </>
  );
}
