import { createSlice, nanoid } from '@reduxjs/toolkit';

export type todo_type = {
  id: string;
  task: string;
  createdAt: number;
  completed: boolean;
};

const initialState: Array<todo_type> = [
  {
    id: '11ww22',
    task: 'Mow the lawn',
    createdAt: 1697967657095,
    completed: false,
  },
  {
    id: '33ff44',
    task: 'Feed the kitty',
    createdAt: 1697967210000,
    completed: true,
  },
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
            createdAt: Date.now(),
            completed: false,
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
