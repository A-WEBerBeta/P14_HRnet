import { configureStore } from "@reduxjs/toolkit";
import employees from "./employeeSlice";

export const store = configureStore({
  reducer: { employees },
});
