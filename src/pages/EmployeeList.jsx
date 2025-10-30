import { useDispatch, useSelector } from "react-redux";
import { clearAll, removeEmployee } from "../store/employeesSlice";

export default function EmployeeList() {
  const employees = useSelector((state) => state.employees.items);
  const dispatch = useDispatch();

  function handleDelete(id) {
    if (!confirm("Confirm delete ?")) return;
    dispatch(removeEmployee(id));
  }

  function handleClear() {
    if (!confirm("Delete ALL employees ?")) return;
    dispatch(clearAll());
  }

  return (
    <div>
      <h1>Current Employees</h1>

      <div>
        <button className="btn btn-secondary" onClick={handleClear}>
          Clear All
        </button>
      </div>

      {employees.length === 0 ? (
        <p>No employees yet.</p>
      ) : (
        <ul>
          {employees.map((e) => (
            <li key={e.id}>
              <div>
                {e.firstName} {e.lastName}
              </div>
              <div>
                Date of Birth: {e.dateOfBirth || "-"} | Start:{" "}
                {e.startDate || "-"}
              </div>
              <div>
                Address: {e.street || "-"}, {e.city || "-"}, {e.state || "-"},{" "}
                {e.zipCode || "-"}
              </div>
              <div>Department: {e.department || "-"}</div>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(e.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
