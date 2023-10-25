import { createSlice, nanoid } from '@reduxjs/toolkit';

export type todo_type = {
  id: string;
  task: string;
  createdAt: number;
  completed: boolean;
};

const initialState: Array<todo_type> = JSON.parse(
  localStorage.getItem('todos') || '[]'
);

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    createTodo: {
      reducer(state, { payload }) {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]');
        state = [...todos, payload];
        localStorage.setItem('todos', JSON.stringify(state));
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
      const todos_db = JSON.parse(localStorage.getItem('todos') || '[]');
      const todo = todos_db.find((todo: todo_type) => todo.id === payload);
      const filteredTodos = state.filter(
        (todo: todo_type) => todo.id !== payload
      );
      if (todo) {
        todo.completed = !todo.completed;
        state = [...filteredTodos, todo];
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    updateTodo: (state, { payload }) => {
      const todos_db = JSON.parse(localStorage.getItem('todos') || '[]');
      const todo = todos_db.find(
        (todo: todo_type) => todo.id === payload.todoId
      );
      const filteredTodos = state.filter(
        (todo: todo_type) => todo.id !== payload.todoId
      );
      if (todo) {
        todo.task = payload.newTask;
        state = [...filteredTodos, todo];
        localStorage.setItem('todos', JSON.stringify(state));
      }
    },
    deleteTodo: (state, { payload }) => {
      const todos_db = JSON.parse(localStorage.getItem('todos') || '[]');
      const filteredTodos = [
        ...todos_db.filter((todo: todo_type) => todo.id !== payload),
      ];
      localStorage.setItem('todos', JSON.stringify(filteredTodos));
      state = [...filteredTodos];
    },
  },
});

export const getTodos = (state: any) => state.todos;
export const getTodo = (state: any, todoId: string) =>
  state.todos.find((todo: todo_type) => todo.id === todoId);

export const { createTodo, completeTodo, updateTodo, deleteTodo } =
  todosSlice.actions;

export default todosSlice.reducer;
