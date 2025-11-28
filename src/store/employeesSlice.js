import { createSlice } from "@reduxjs/toolkit";
import { mockEmployees } from "../data/mockEmployees";

// Initial state of the employee store:
// Starts with a mock dataset for demo / testing purposes.
const initialState = {
  items: mockEmployees,
};

// Slice responsible for managing the employee list
const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    /**
     * Add a new employee to the store.
     * The payload must contain a valid employee object.
     */
    addEmployee(state, action) {
      state.items.push(action.payload);
    },
  },
});

// Export actions & reducer for integration into the store
export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
