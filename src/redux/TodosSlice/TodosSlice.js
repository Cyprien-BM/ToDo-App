import { createSlice, current } from '@reduxjs/toolkit';
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
      console.log('ici');
      state.data.unshift(action.payload);
    },
  },
});

export const { getAllTodos, updateTodoState, createNewTodoSlice } =
  todosSlice.actions;

export default todosSlice.reducer;
