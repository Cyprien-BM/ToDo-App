import { createSlice } from '@reduxjs/toolkit';
import { sortTodos } from '../../Utils/SortTodos';

export const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
  },
  reducers: {
    getAllTodos: (state, action) => {
      state.data = sortTodos(action.payload);
    },
    updateTodoState: (state, action) => {
      state.data.forEach((todo) => {
        if (todo.id === action.payload.id) todo.state = action.payload.newState;
      });
      state.data = sortTodos(state.data);
    },
    createNewTodoSlice: (state, action) => {
      state.data.unshift(action.payload);
    },
    deleteTodoSlice: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== +action.payload);
    },
  },
});

export const {
  getAllTodos,
  updateTodoState,
  createNewTodoSlice,
  deleteTodoSlice,
} = todosSlice.actions;

export default todosSlice.reducer;
