import { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employeeSlice";

export default function CreateEmployee() {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!firstName.trim() || !lastName.trim()) return;

    const id = Date.now().toString();
    dispatch(addEmployee({ id, firstName, lastName }));

    setFirstName("");
    setLastName("");
  }

  return (
    <div>
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          First name{" "}
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />{" "}
        </label>

        <label htmlFor="">
          Last name
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <button type="submit">Add employee</button>
      </form>
    </div>
  );
}
