import { configureStore } from "@reduxjs/toolkit";
import employees from "./employeesSlice";

export const store = configureStore({
  reducer: { employees },
});
