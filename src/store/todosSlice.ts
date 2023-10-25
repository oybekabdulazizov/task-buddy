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
    completeTodo: (state, { payload }) => {
      const todo = state.find((todo: todo_type) => todo.id === payload);
      const todos = state.filter((todo: todo_type) => todo.id !== payload);
      if (todo) {
        todo.completed = !todo.completed;
        state = [...todos, todo];
      }
    },
  },
});

export const getTodos = (state: any) => state.todos;
export const getTodo = (state: any, todoId: string) =>
  state.todos.find((todo: todo_type) => todo.id === todoId);

export const { addTodo, completeTodo } = todosSlice.actions;

export default todosSlice.reducer;
