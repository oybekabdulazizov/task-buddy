import { createSlice } from '@reduxjs/toolkit';

export type todo_type = {
  id: string;
  task: string;
};

const initialState: Array<todo_type> = [
  { id: '11ww22', task: 'Mow the lawn' },
  { id: '33ff44', task: 'Feed the kitty' },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
});

export const getTodos = (state: any) => state.todos;

export default todosSlice.reducer;
