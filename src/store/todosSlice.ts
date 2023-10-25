import { createSlice, nanoid } from '@reduxjs/toolkit';

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
  reducers: {
    addTodo: {
      reducer(state, { payload }) {
        state.push(payload);
      },
      prepare(task: string) {
        return {
          payload: {
            id: nanoid(),
            task,
          },
          meta: null,
          error: null,
        };
      },
    },
  },
});

export const getTodos = (state: any) => state.todos;

export const { addTodo } = todosSlice.actions;

export default todosSlice.reducer;
