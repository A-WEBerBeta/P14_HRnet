import { createSlice } from "@reduxjs/toolkit";
import { mockEmployees } from "../data/mockEmployees";

const initialState = {
  items: mockEmployees,
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.items.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
