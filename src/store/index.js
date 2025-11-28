import { configureStore } from "@reduxjs/toolkit";
import employees from "./employeesSlice";

// Configure the global Redux store:
// - Registers the "employees" slice reducer
export const store = configureStore({
  reducer: { employees },
});
