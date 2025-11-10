import { useState } from "react";
import { useDispatch } from "react-redux";
import DateInput from "../components/DateInput";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Select from "../components/Select";
import { US_STATES_OPTIONS } from "../data/usStates";
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
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  const [department, setDepartment] = useState("");

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
    setDepartment("");
    setError("");
  }

  return (
    <div className="create-container">
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
        <DateInput
          label="Date of Birth"
          value={dateOfBirth}
          onChange={setDateOfBirth}
        />
        <DateInput
          label="Start Date"
          value={startDate}
          onChange={setStartDate}
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
          <Select
            label="State"
            id="state"
            value={state}
            onChange={(e) => setState(e.target.value)}
            options={US_STATES_OPTIONS}
            placeholder="Choose a state..."
            className=""
          />
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="number"
            id="zipCode"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
        </div>
        {/* Department */}
        <Select
          label="Department"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          options={[
            "Sales",
            "Marketing",
            "Engineering",
            "Human Resources",
            "Legal",
          ]}
          placeholder="Choose a department..."
          className=""
        />
        {error && <div role="alert">{error}</div>}
        <button type="submit" className="btn btn-primary">
          Add employee
        </button>
      </form>
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Employee created!"
        className=""
        animation="zoom"
      >
        <p>Your employee has been added successfully.</p>
      </Modal>
      <Footer />
    </div>
  );
}
