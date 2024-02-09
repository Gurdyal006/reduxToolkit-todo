import { configureStore } from "@reduxjs/toolkit";
import addTodo from "./reducers/todoSlice";

export const store = configureStore({
  reducer: addTodo,
});
