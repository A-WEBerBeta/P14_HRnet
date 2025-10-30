import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const employeeSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee(state, action) {
      state.items.push(action.payload);
    },
    removeEmployee(state, action) {
      // on garde tous les employés sauf celui de l'id correspond au payload
      state.items = state.items.filter((e) => e.id !== action.payload);
    },
    clearAll(state) {
      state.items = [];
    },
  },
});

export const { addEmployee, removeEmployee, clearAll } = employeeSlice.actions;
export default employeeSlice.reducer;
