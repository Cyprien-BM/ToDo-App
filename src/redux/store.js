import { configureStore } from "@reduxjs/toolkit";
import todosReducer from './TodosSlice/TodosSlice'

export default configureStore ({
  reducer: {
    todos: todosReducer
  }
})