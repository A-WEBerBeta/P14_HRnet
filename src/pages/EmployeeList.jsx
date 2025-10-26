import { useSelector } from "react-redux";

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.items);

  return (
    <div>
      <h1>Employee List</h1>
      {employees.length === 0 ? (
        <p>No employees yet.</p>
      ) : (
        <ul>
          {employees.map((e) => (
            <li>
              {e.firstName} {e.lastName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
