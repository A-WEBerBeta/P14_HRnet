import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "../components/Modal";
import { addEmployee } from "../store/employeesSlice";

export default function CreateEmployee() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // Champs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");

  // Bloc Adresse
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipCode, setZipCode] = useState("");

  const [department, setDepartment] = useState("Sales");

  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const f = firstName.trim();
    const l = lastName.trim();
    const dob = dateOfBirth;
    const sd = startDate;

    if (!f || !l) {
      setError("Both first and last names are required.");
      return;
    }

    const id = Date.now().toString();
    dispatch(
      addEmployee({
        id,
        firstName: f,
        lastName: l,
        dateOfBirth: dob,
        startDate: sd,
        street,
        city,
        state,
        zipCode,
        department,
      })
    );
    setShowModal(true);

    // Reset
    setFirstName("");
    setLastName("");
    setDateOfBirth("");
    setStartDate("");
    setStreet("");
    setCity("");
    setState("");
    setZipCode("");
    setDepartment("Sales");
    setError("");
  }

  return (
    <div>
      <h1>HRnet</h1>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        {/* Identité */}
        <label htmlFor="firstName">First name</label>
        <input
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />{" "}
        <label htmlFor="lastName">Last name</label>
        <input
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        {/* Dates */}
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        {/* Adresse */}
        <div className="address-section">
          <h3 className="section-title">Address</h3>
          <label htmlFor="street">Street</label>
          <input
            id="street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
          />
          <label htmlFor="city">City</label>
          <input
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <label htmlFor="state">State</label>
          <select
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
          >
            <option>Alabama</option>
            <option>California</option>
            <option>Florida</option>
            <option>New York</option>
            <option>Texas</option>
            <option>Washington</option>
          </select>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="number"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        {/* Department */}
        <label htmlFor="department">Department</label>
        <select
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
        {error && <div role="alert">{error}</div>}
        <button type="submit" className="btn btn-primary">
          Add employee
        </button>
      </form>
      <Modal open={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
